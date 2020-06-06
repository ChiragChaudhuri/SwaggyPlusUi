import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addrest',
  templateUrl: 'addrest.component.html',
  styleUrls: ['./addrest.component.css']
})
export class AddrestComponent implements OnInit {
	public restaurant:{
		restname:"",
		restrating:"",
		delivery:"",
		restaddress:""
	};
  constructor() { }

  ngOnInit(): void {
  	console.log("Hello");
  }
  addRestaurant(restname,restrating,delivery,restaddress)
  {	
  	this.restaurant.restname=restname;
  	this.restaurant.restrating=restrating;
  	this.restaurant.delivery=delivery;
  	this.restaurant.restaddress=restaddress;
  }	

}
