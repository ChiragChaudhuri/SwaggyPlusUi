import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import {AdminauthService} from '../service/adminauth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public loginService:AuthenticationService,public adminlogin:AdminauthService) { }

  ngOnInit(): void {
  }
}
