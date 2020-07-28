import { SignupComponent } from './../signup/signup.component';
import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
loading = false;
  constructor(private router:Router, private userService: UserService,
              private modalController: ModalController) { }

  
  model = {  email: '',password: ''
  };

  ngOnInit() {
    console.log('my inits')

  }

  ngOnDestroy(){
    console.log('destory')
  }

  login(){
    console.log(this.model);
    this.userService.login(this.model).subscribe(
      res => {
        this.router.navigate(['/tabs/dashboard']);
        this.userService.setToken(res['token']);
        localStorage.setItem('username',res['doc']['username']);
        localStorage.setItem('user_id',res['doc']['_id']);
        localStorage.setItem('user-role',res['doc']['role']);
        this.loading = false;
      },
      err => {
        console.log(err);
        this.userService.toast('error',err.error.message, 2000);
      }
    );
   
    
  }

  async signup() {
    const modal = await this.modalController.create({
      component: SignupComponent } );
    modal.onDidDismiss().then(()=> {
           console.log('modal dismiss..');
           });
    return await modal.present();
   }

}
