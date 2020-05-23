import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminlistService {

  constructor() { }
  getAdminlist(){
  	return[{adminId:12,password:"abc"},
  			{adminId:65,password:"bc"},
  			{adminId:24,password:"ac"},
  			{adminId:11,password:"c"}
  	];
  }
}
