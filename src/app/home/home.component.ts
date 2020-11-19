import { Component, OnInit,ViewChild } from '@angular/core';
import { RulesService} from '../services/rules.service';
import {AgGridAngular} from 'ag-grid-angular';
import { Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('agGrid') agGrid: AgGridAngular;

  getJsonFile:any;
  rowData:[];
  columnDefs = [
    { field: '', checkboxSelection: true, width:50},
    { field: 'id', sortable: true, filter: true },
    { field: 'properties.displayName', sortable: true, filter: true},
    { field: 'type', sortable: true, filter: true  },
    { field: 'kind', sortable: true, filter: true  },
    { field: 'properties.severity', sortable: true, filter: true  },
    { field: 'properties.status', sortable: true, filter: true }
];


    defaultColDef;
    maxBlocksInCache;
    cacheBlockSize;
    validate=false;
    params:any;
    selectedData:any;
  constructor(private ruleService: RulesService, private router:Router) {
  this.defaultColDef = { resizable: true };
  this.cacheBlockSize = 100;
  this.maxBlocksInCache = 10; }

  ngOnInit(): void {
    // this.getJsonFile = require('./get_all_teampltes_response_mock.json');
    // this.rowData = this.getJsonFile;
    this.getRules();
  }
  onFirstDataRendered(params) {
    params.api.sizeColumnsToFit();
  }

  onRowClicked(event: any) { 
    localStorage.setItem("currentRule", JSON.stringify(event.data));
    this.ruleService.selectedRule = event.data;
    this.router.navigate(['/edit']);

  }

  onGridReady(params) {
    this.params = params;
    params.api.sizeColumnsToFit();
  }


  getRules() {
    this.ruleService.getRules().subscribe(dbrules => {
      this.rowData = dbrules.value;
     
    },
    err => {
      console.log(err)
    });
  }

  onSelectionChanged(event){
    if(this.params.api.getSelectedRows().length >= 1){
      this.validate = true;
    }else{
      this.validate = false;
    }
  }

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    this.selectedData = selectedNodes.map(node => {
      if (node.groupData) {
        return { make: node.key, model: 'Group' };
      }
      if(node.data.kind === "Scheduled"){
        this.deployScheduledAlert(node.data);
      }
      else  if(node.data.kind === "Fusion"){
         this.deployFusionAlert(node.data);
      }
    });
}

  deployFusionAlert(data){
    this.ruleService.deployFusionAlert(data,"").subscribe(dbdata => {
      alert (dbdata);
     
    },
    err => {
      alert(err.error.error.message);
    });
  }

  deployScheduledAlert(data){
    this.ruleService.deployScheduledAlert(data,"","","","").subscribe(dbdata => {
      alert (dbdata);
     
    },
    err => {
      alert(err.error.error.message);
    });
  }



}
