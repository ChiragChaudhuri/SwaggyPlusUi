import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserlistService {

  constructor() { }
  getUserlist(){
  	return[{userId:21,password:"cba"},
  			{userId:56,password:"cb"},
  			{userId:42,password:"ca"},
  			{userId:11,password:"cc"}
  	];
  }
}
