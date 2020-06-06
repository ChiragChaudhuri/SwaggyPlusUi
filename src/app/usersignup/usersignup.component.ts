import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})
export class UsersignupComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  checkSignup()
  {
   	this.router.navigate(['/login']);		
  }
}
