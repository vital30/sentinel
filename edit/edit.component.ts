import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router} from '@angular/router';
import { RulesService} from '../services/rules.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editForm: FormGroup;
  ruleData:any;
  isScheduledTrue:boolean;

  constructor(private ruleService: RulesService, private router: Router) {  }
  ngOnInit(): void {
    this.ruleData = this.ruleService.selectedRule;
    this.ruleData = JSON.parse(localStorage.getItem("currentRule"));

    this.ruleData.kind === "Scheduled" ? this.isScheduledTrue = true : this.isScheduledTrue = false;
  }

  update(enabled) {
    enabled === "enabled" ? enabled = true : false;

    this.ruleService.deployFusionAlert(this.ruleData, enabled).subscribe(dbdata => {
      alert (dbdata);
     
    },
    err => {
      alert(err.error.error.message);
    });
  }

  updateScheduled(displayName, severity, triggerOperator, triggerThreshold) {
    this.ruleService.deployScheduledAlert(this.ruleData, displayName, severity, triggerOperator, triggerThreshold).subscribe(dbdata => {
      alert (dbdata);
     
    },
    err => {
      alert(err.error.error.message);
    });
  }

}
