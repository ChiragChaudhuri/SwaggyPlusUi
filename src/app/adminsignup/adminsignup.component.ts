import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adminsignup',
  templateUrl: './adminsignup.component.html',
  styleUrls: ['./adminsignup.component.css']
})
export class AdminsignupComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  checkSignup()
  {
   	this.router.navigate(['/admin-login']);		
  }
}
