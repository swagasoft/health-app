import { ConfigService } from './../../proivder/config.service';
import { PaynowComponent } from './../paynow/paynow.component';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { ModalController, Config } from '@ionic/angular';
import { ApiService } from 'src/app/proivder/api.service';

interface langObject {
  name:string;
  value:string;
}



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  constructor(public apiService: ApiService, public config: ConfigService) {
  	this.config.setLanguage("en-gb");
    this.config.setFormat("json");
    
  }


  ngOnInit() {
    this.getSyptoms()
  }


  getSyptoms(){
    this.apiService.loadSymptoms().subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
  }

}


