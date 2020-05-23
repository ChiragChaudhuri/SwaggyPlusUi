import { Component, OnInit } from '@angular/core';
import {AdminlistService} from '../adminlist.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

 //public admin:Admin1=new Admin1("","");
 
  constructor(private router:Router ,
    private _adminlist:AdminlistService
  ) { }

  ngOnInit(): void {
  }


  loginHandle(obj){
   console.log(obj);
   this.router.navigate(['/admin-dashboard',obj]);
}}