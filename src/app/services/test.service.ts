import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
  import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
status : string = ' default';

  constructor(private http: HttpClient) { }

  getSomedata(){
    this.http.get('https://api.github.com/users/hadley/orgs').subscribe(
      response => {
        console.log(response);
      },
      err  => {
        console.log(err);
      }
    );
  }
  changeStatusToGreen(){
    this.status = ' green';
  }
  changeStatusToDefault(){
    this.status = ' default';
  }
}
