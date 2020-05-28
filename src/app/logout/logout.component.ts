import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import {AdminauthService} from '../service/adminauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private authentocationService: AuthenticationService,
    private adminauth: AdminauthService,
    private router: Router) {

  }

  ngOnInit() {
    console.log("10")
    this.authentocationService.logOut();
    this.adminauth.logOut();
    this.router.navigate(['/about']);
  }

}
