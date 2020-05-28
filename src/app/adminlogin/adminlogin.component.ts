import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminauthService } from '../service/adminauth.service'

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
	username = 'Admin'
    password = 'password'
    invalidLogin = false
  	constructor(private router: Router,
    public loginservice: AdminauthService) { }

  ngOnInit(): void {
  }
   checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)
    ) {
      this.router.navigate(['/admin-dashboard'])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }
}
