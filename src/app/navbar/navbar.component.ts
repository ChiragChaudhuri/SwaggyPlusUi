import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import {AdminauthService} from '../service/adminauth.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userName: any
  constructor(public loginService:AuthenticationService,public adminlogin:AdminauthService, private router:Router) { }

  ngOnInit(): void {
    this.userName = this.loginService.getCurrentUserName()
  }

  cart(){

    let id = sessionStorage.getItem('userId')
    console.log(id)
    this.router.navigate(['/cart',id])
  }

}
