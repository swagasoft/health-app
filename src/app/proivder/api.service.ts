import { ConfigService } from './config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import {from} from 'rxjs';
// import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})





export class ApiService {

   headers = new HttpHeaders()
.append('Authorization',this.config.getToken())
.append('x-rapidapi-hos', '"priaid-symptom-checker-v1.p.rapidapi.com')
.append('x-rapidapi-ke', '8ed62d28bbmsh586938f6e9933cbp1535e8jsnea52ef250fa');
// .set('Authorization', 'token='+this.config.getToken());

  public classData:any;
  constructor(public http: HttpClient, public config: ConfigService) {
  }

  

  loadSymptoms() {
      let url = 'https://priaid-symptom-checker-v1.p.rapidapi.com/body/locations';
          // return from( fetch(url,{method: 'GET'}));
        return  this.http.get(url,{headers: this.headers});
        
     
  }

  loadIssues() {

      let url = `${this.config.getAPIURL()}/issues`;
      let extraArgs = 'token='+this.config.getToken()+'&language='+this.config.getLanguage()+'&format='+this.config.getFormat();
      url += url.indexOf("?") > 0 ? "&"+extraArgs : "?"+extraArgs;

      if(this.config.getFormat() == "json") {
          return this.http.get(url, {headers: this.headers});
      }
        else { 
          return this.http.get(url, {headers: this.headers});
      }

  }


  loadIssueInfo(issueId) {
    
      let url = `${this.config.getAPIURL()}/issues/${issueId}/info`;
      let extraArgs = 'token='+this.config.getToken()+'&language='+this.config.getLanguage()+'&format='+this.config.getFormat();
      url += url.indexOf("?") > 0 ? "&"+extraArgs : "?"+extraArgs;

      if(this.config.getFormat() == "json") {
          return this.http.get(url, {headers: this.headers});
      }
        else { 
          return this.http.get(url, {headers: this.headers});
      }

  }

  loadDiagnosis(selectedSymptoms,gender,yearOfBirth) {

      let symptoms = selectedSymptoms.split(',');
      let url = `${this.config.getAPIURL()}/diagnosis?symptoms=`+JSON.stringify(symptoms)+`&gender=${gender.value}&year_of_birth=${yearOfBirth}`;
      let extraArgs = 'token='+this.config.getToken()+'&language='+this.config.getLanguage()+'&format='+this.config.getFormat();
      url += url.indexOf("?") > 0 ? "&"+extraArgs : "?"+extraArgs;

      if(this.config.getFormat() == "json") {
          return this.http.get(url, {headers: this.headers});
      }
        else { 
          return this.http.get(url, {headers: this.headers});
      }

  }

  loadSpecialisations(selectedSymptoms,gender,yearOfBirth) {

      let symptoms = selectedSymptoms.split(',');
      let url = `${this.config.getAPIURL()}/diagnosis/specialisations?symptoms=`+JSON.stringify(symptoms)+`&gender=${gender.value}&year_of_birth=${yearOfBirth}`;
      let extraArgs = 'token='+this.config.getToken()+'&language='+this.config.getLanguage()+'&format='+this.config.getFormat();
      url += url.indexOf("?") > 0 ? "&"+extraArgs : "?"+extraArgs;

      if(this.config.getFormat() == "json") {
          return this.http.get(url, {headers: this.headers});
      }
        else { 
          return this.http.get(url, {headers: this.headers});
      }

  }

  loadProposedSymptoms(selectedSymptoms,gender,yearOfBirth) {

      let symptoms = selectedSymptoms.split(',');
      let url = `${this.config.getAPIURL()}/symptoms/proposed?symptoms=`+JSON.stringify(symptoms)+`&gender=${gender.value}&year_of_birth=${yearOfBirth}`;
      let extraArgs = 'token='+this.config.getToken()+'&language='+this.config.getLanguage()+'&format='+this.config.getFormat();
      url += url.indexOf("?") > 0 ? "&"+extraArgs : "?"+extraArgs;

      if(this.config.getFormat() == "json") {
          return this.http.get(url, {headers: this.headers});
      }
        else { 
          return this.http.get(url, {headers: this.headers});
      }

  }

  loadBodyLocations() {

      let url = `${this.config.getAPIURL()}/body/locations`;
      let extraArgs = 'token='+this.config.getToken()+'&language='+this.config.getLanguage()+'&format='+this.config.getFormat();
      url += url.indexOf("?") > 0 ? "&"+extraArgs : "?"+extraArgs;

      if(this.config.getFormat() == "json") {
          return this.http.get(url, {headers: this.headers});
      }
        else { 
          return this.http.get(url, {headers: this.headers});
      }

  }

  loadBodySublocations(bodyLocationId) {

      let url = `${this.config.getAPIURL()}/body/locations/${bodyLocationId}`;
      let extraArgs = 'token='+this.config.getToken()+'&language='+this.config.getLanguage()+'&format='+this.config.getFormat();
      url += url.indexOf("?") > 0 ? "&"+extraArgs : "?"+extraArgs;

      if(this.config.getFormat() == "json") {
          return this.http.get(url, {headers: this.headers});
      }
        else { 
          return this.http.get(url, {headers : this.headers});
      }

  }

  loadBodySublocationSymptoms(bodySublocationId,selectorStatus) {

     let url = `${this.config.getAPIURL()}/symptoms/${bodySublocationId}/${selectorStatus.value}`;
     let extraArgs = 'token='+this.config.getToken()+'&language='+this.config.getLanguage()+'&format='+this.config.getFormat();
     url += url.indexOf("?") > 0 ? "&"+extraArgs : "?"+extraArgs;

     if(this.config.getFormat() == "json") {
          return this.http.get(url, {headers: this.headers});
      }
        else { 
          return this.http.get(url, {headers : this.headers});
      }
  }

  loadRedFlagText(symptomId) {

      let url = `${this.config.getAPIURL()}/redflag?symptomId=${symptomId}`;
      let extraArgs = 'token='+this.config.getToken()+'&language='+this.config.getLanguage()+'&format='+this.config.getFormat();
      url += url.indexOf("?") > 0 ? "&"+extraArgs : "?"+extraArgs;

      if(this.config.getFormat() == "json") {
          return this.http.get(url, {headers: this.headers});
      }
        else { 
          return this.http.get(url, {headers: this.headers});
      }

  }
}
