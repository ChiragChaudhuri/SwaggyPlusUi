import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, User } from '../service/authentication.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  invalidLogin = false
  user =new  User(this.username, this.password)

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit() {

  }

  checkLogin() {
   /* if (this.loginservice.authenticate(this.username,this.password)
    ) {
      this.router.navigate(['/restaurant-list'])
      this.invalidLogin = false
    } else
    {
      this.invalidLogin = true
      alert("Invalid Login Details")}
  } */

  this.user =new  User(this.username, this.password)
  console.log(this.user)
  this.loginservice.loginHandle(this.user).subscribe(
    data=> {console.log(data)
      this.router.navigate(['/restaurant-list'])
      this.invalidLogin = false
    } ,
    error=> {console.log(error)}
  )
}
}