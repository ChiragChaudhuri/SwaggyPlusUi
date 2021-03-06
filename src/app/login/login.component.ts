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
  jumpSignUp()
  {
    this.router.navigate(['/user-signup'])
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
  let userId: any
  let userName: any
  this.user =new  User(this.username, this.password)
  console.log(this.user)
  this.loginservice.loginHandle(this.user).subscribe(
    data=> {console.log(data)
      userId= data
      this.loginservice.getUserName(userId).subscribe(
        data=> {
          userName = data
          sessionStorage.setItem('userName', userName)
          console.log(userName)
        }
      )
      sessionStorage.setItem('userId',userId)
      this.router.navigate(['/restaurant-list'])
      this.invalidLogin = false
    } ,
    error=> {console.log(error)}
  )
}
}