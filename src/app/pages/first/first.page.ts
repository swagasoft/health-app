import { TestService } from './../../services/test.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.page.html',
  styleUrls: ['./first.page.scss'],
})
export class FirstPage implements OnInit {

  constructor(public testService: TestService) { }

  ngOnInit() {
    this.testService.changeStatusToDefault()
  }

  changeOne(){
    this.testService.getSomedata();
    console.log('click 1')
  }
  changeTwo(){
    this.testService.changeStatusToGreen();
    console.log('click 2')
  }

  changeThree(){
    this.testService.changeStatusToDefault();
    console.log('click 3')
  }



}
