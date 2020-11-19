import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RulesService {

  constructor(private http: HttpClient) {}
  selectedRule:any;

  subscriptionId = "b9ea4710-7dde-4960-aaa2-5252ef7ae23c";
  resourceGroupName = "VitalyN-RG";
  workspaceName = "vitalSentinelWorkspace";

  url = "https://management.azure.com/subscriptions/b9ea4710-7dde-4960-aaa2-5252ef7ae23c/resourceGroups/VitalyN-RG/providers/Microsoft.OperationalInsights/workspaces/vitalSentinelWorkspace/providers/Microsoft.SecurityInsights/alertRuleTemplates?api-version=2020-01-01";
  
  
/////DEPLOY OPTIONS
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImtnMkxZczJUMENUaklmajRydDZKSXluZW4zOCIsImtpZCI6ImtnMkxZczJUMENUaklmajRydDZKSXluZW4zOCJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9jYzgwZjYwNi00OWQ3LTRiN2MtYTUyNi01MDA5ZWUxNzM5MzIvIiwiaWF0IjoxNjA1NzIzNTQ4LCJuYmYiOjE2MDU3MjM1NDgsImV4cCI6MTYwNTcyNzQ0OCwiYWNyIjoiMSIsImFpbyI6IkUyUmdZUGhVWVZOMzdIOWM1YjkveDlYcXczZDBmTnlVMnZqSWttR1p1cDRJVTFiWXEzSUEiLCJhbXIiOlsicHdkIl0sImFwcGlkIjoiN2Y1OWE3NzMtMmVhZi00MjljLWEwNTktNTBmYzViYjI4YjQ0IiwiYXBwaWRhY3IiOiIyIiwiaXBhZGRyIjoiODQuMjI5LjE5Mi4xMDgiLCJuYW1lIjoiVml0YWx5IE5hZnRhbHkiLCJvaWQiOiJmZTUwNjFiZS03OTI3LTQxZGItYTRmNC0xNDMxMTAyNWE3ZWYiLCJwdWlkIjoiMTAwMzIwMDBGOEYwMDQxMSIsInJoIjoiMC5BUzBBQnZhQXpOZEpmRXVsSmxBSjdoYzVNbk9uV1gtdkxweENvRmxRX0Z1eWkwUXRBTG8uIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoia0lWaEV2V3ZsajNZMUZVMTJKWU1iNHVlcFpDeGFiR2dKc1EtaUl0TWVjNCIsInRpZCI6ImNjODBmNjA2LTQ5ZDctNGI3Yy1hNTI2LTUwMDllZTE3MzkzMiIsInVuaXF1ZV9uYW1lIjoiVml0YWx5TkBhbWJhd29sdmVzLm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6IlZpdGFseU5AYW1iYXdvbHZlcy5vbm1pY3Jvc29mdC5jb20iLCJ1dGkiOiI4RHh4Wk0xVjkwV3dXT19YcVNWeEFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXSwieG1zX3RjZHQiOjE1Mzk2OTcwNDF9.h1nmT-NWGBh7bYoc_Ij59mhe_mrEjvTcPWmt-8isbARns0olLw6mb0NRIWyMDpj2Lu-6SebMA7DWvDj_5lF0XbPSOEFE3B5-0KF-i7hJGffRpsjfxwUx9MtQBYa3HwluQxzNbkgBYVAcmpHZZeXQ2cfgDUI4SuteFQYi32M4_7ATaU-ymkcrXWXHJAFW61UBR7nibzQRtnLl5IIDGYtN-ugN3wUkGpktVrr7_E8wjTkx4y2ZsBxrzqvevbb_sSkCHVd-_kxHrBcfImm8aPf7gfUJfTbZXv_0mnsJqk7WCypAYSiYtsnnYGT2Wi56eLiUpa6H62jTMsTNPJPZnZo1bA'
    })
  };
  
  getRules(): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImtnMkxZczJUMENUaklmajRydDZKSXluZW4zOCIsImtpZCI6ImtnMkxZczJUMENUaklmajRydDZKSXluZW4zOCJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9jYzgwZjYwNi00OWQ3LTRiN2MtYTUyNi01MDA5ZWUxNzM5MzIvIiwiaWF0IjoxNjA1NzIyMjIzLCJuYmYiOjE2MDU3MjIyMjMsImV4cCI6MTYwNTcyNjEyMywiYWNyIjoiMSIsImFpbyI6IkUyUmdZRmdlTm90RnhMV25lMVA1ODM4aXQyVlNTZ3Yzbk5zU0tGMm85bmFQL1BHSnJ2d0EiLCJhbXIiOlsicHdkIl0sImFwcGlkIjoiN2Y1OWE3NzMtMmVhZi00MjljLWEwNTktNTBmYzViYjI4YjQ0IiwiYXBwaWRhY3IiOiIyIiwiaXBhZGRyIjoiODQuMjI5LjE5Mi4xMDgiLCJuYW1lIjoiVml0YWx5IE5hZnRhbHkiLCJvaWQiOiJmZTUwNjFiZS03OTI3LTQxZGItYTRmNC0xNDMxMTAyNWE3ZWYiLCJwdWlkIjoiMTAwMzIwMDBGOEYwMDQxMSIsInJoIjoiMC5BUzBBQnZhQXpOZEpmRXVsSmxBSjdoYzVNbk9uV1gtdkxweENvRmxRX0Z1eWkwUXRBTG8uIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoia0lWaEV2V3ZsajNZMUZVMTJKWU1iNHVlcFpDeGFiR2dKc1EtaUl0TWVjNCIsInRpZCI6ImNjODBmNjA2LTQ5ZDctNGI3Yy1hNTI2LTUwMDllZTE3MzkzMiIsInVuaXF1ZV9uYW1lIjoiVml0YWx5TkBhbWJhd29sdmVzLm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6IlZpdGFseU5AYW1iYXdvbHZlcy5vbm1pY3Jvc29mdC5jb20iLCJ1dGkiOiJjSTd4M2k0RXRFeVhFa204V2Y5cEFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXSwieG1zX3RjZHQiOjE1Mzk2OTcwNDF9.AGsFAZwK2UfJ2ABwxRz049v38S7WvmJS_ewHUSTy57VrmhHRYFclYA7fijXqFqO6RDAucg-vYqCghikv6q2pN_necD_V60kGgBlpREi4-WLYvXCjlvuBxL9E4adL7D1J5W5nfOPmxSQYXeCKjcIPhGlYioDa0nARDryUtZyI1WAPwj8Y6FO666YhvrrjNNw5FTrvjwZLIcHL43DF9VHXF5fPDbo0CKm4XdsoHfZa5SULzygkWZCMJvswAG7sVsS22Q8YU53k-DqnbYEgCmBXjoNuiCShIInFvJWfEMbftuv8O6B3Jn1DamGOz1TuEZWUmksCdJbr-ezy7Ztu-9-TNA'
      })
    };

    const url = this.url;
    return this.http.get(url,httpOptions);
  }

  deployFusionAlert(data, enabled): Observable<any> {
    let baseUrl = "https://management.azure.com";
    let restUrl = data.id;
    var Z = restUrl.slice(restUrl.indexOf("SecurityInsights"));

    let apiVersion = "?api-version=2020-01-01";
    
    const httpOptions = this.httpOptions;

    const body = {
      'kind': "Fusion",
      'properties':{
        'alertRuleTemplateName': "f71aba3d-28fb-450b-b192-4e76a83015c8",
        'enabled': enabled || "true"
      }
    }
    const url = baseUrl + restUrl+apiVersion;
    return this.http.put(url,body,httpOptions);
  }

  deployScheduledAlert(data, displayNameEdited, severityEdited, triggerOperatorEdited, triggerThresholdEdited): Observable<any> {
    let baseUrl = "https://management.azure.com";
    let restUrl = data.id;
    let Z = restUrl.slice(0, restUrl.indexOf("AlertRuleTemplates"));

    let apiVersion = "?api-version=2020-01-01";


    let displayName = data.properties.displayName;
    let severity = data.properties.severity;
    let triggerOperator = data.properties.triggerOperator;
    let triggerThreshold = data.properties.triggerThreshold;

    const httpOptions = this.httpOptions;

    const body = {
      'kind': "Scheduled",
        'properties':{
        'displayName': displayNameEdited || displayName,
        'enabled': "true",
        'suppressionDuration':"PT1H30M",
        'suppressionEnabled':"true",
        'severity':severityEdited || severity,
        'query':"l",
        'queryFrequency':"PT1H30M",
        'queryPeriod':"PT1H30M",
        'triggerOperator':triggerOperatorEdited || triggerOperator,
        'triggerThreshold':triggerThresholdEdited ||triggerThreshold
        }  
    }
    const url = baseUrl + Z +"alertRules/myFirstFusionRule?api-version=2020-01-01";
    return this.http.put(url,body,httpOptions);
  }
}
