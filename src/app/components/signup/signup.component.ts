import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
loading = false;
  constructor(private userService: UserService, public modalController: ModalController) { }
model = {email:'', username:'', password:'', conf_password:''}
  ngOnInit() {}

  signUp(){
    this.userService.createUser(this.model).subscribe(
      res => {
        console.log(res)
        this.closeModal();
        this.userService.toast('success', res['message'], 1000);
      },
      err => {
        console.log(err);
        this.userService.toast('success', err.error.message, 3000);
      }
    )
  }

  closeModal(){
    this.modalController.dismiss();
  } 
  
}

