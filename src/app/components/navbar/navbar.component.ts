import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  userDetails: any;

  constructor(
    public userService: UserService,
    private router: Router
    ) { }

  ngOnInit() {
this.userDetails = this.userService.isLogedIn();
console.log(this.userDetails);

  }

  onLogout(){
    this.userService.logout();
    this.router.navigateByUrl('/login');
  }

}
