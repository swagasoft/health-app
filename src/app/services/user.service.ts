import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AlertController, ToastController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  messsageFromServer : any;
  token: any;
  public appUser: any; 
  public role: any;
  username: any;


  noAuthHeader = {headers: new HttpHeaders({NoAuth: 'True'})};
AuthHeader = {headers: new HttpHeaders().set('Authorization',
`Bearer ${localStorage.getItem('token')}`)};

  constructor(private http: HttpClient,  public alertController: AlertController,
              public toastController: ToastController,  private platform: Platform,
              private router: Router) {
     }


    
    
  
       login(credentials) {
        return this.http.post(environment.apiBaseUrl  + '/login',
         credentials, this.noAuthHeader);
      }
  
      createUser(user_info){
        return  this.http.post(environment.apiBaseUrl + `/create-user`, user_info);
      }
  
     
  
 
  
       getUserRole(){
        return localStorage.getItem('user-role');
       }
  
       getUser(){
        return localStorage.getItem('username');
       }
  
  
      public getToken(): string {
        this.token = localStorage.getItem('token');
        return this.token;
        }
  
      getUserPayload() {
        const token = this.getToken();
        if (token) {
          const userPayload = atob(token.split('.')[1]);
          return JSON.parse(userPayload);
        } else {
          return null;      
        }
      }
      
      isLogedIn() {
        const userPayload = this.getUserPayload();
        if (userPayload) {
        return userPayload.exp > Date.now() / 1000;
        } else {
        return false;
        }
      }
  
       setToken(token: string) {
        localStorage.setItem('token', token);
       }
  
       deleteToken() {
        window.localStorage.removeItem('token');
      }
  
       public logout(): void {
        this.deleteToken();
        this.token = '';
        this.username = '';
        localStorage.removeItem('appUser');
        this.router.navigateByUrl('/login');
       }
  
       loadBalance(){
        return this.http.get(environment.apiBaseUrl + '/load-balance');
      }
  
      async toast(header,message, duration) {
        const toast = await this.toastController.create({
          header:  `${header}`,
          message: `${message}`,
          position: 'bottom',
          duration: duration
        });
        toast.present();
        
      }
      
  
}
