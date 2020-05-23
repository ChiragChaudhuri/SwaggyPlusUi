import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {RestlistService} from '../restlist.service'
@Component({
  selector: 'app-resturant-list',
  templateUrl: './resturant-list.component.html',
  styleUrls: ['./resturant-list.component.css']
})
export class ResturantListComponent implements OnInit {
  //restaurants: any;
  //private r:Restlist
  restaurants:any;
  constructor(private router:Router,private _restlistService: RestlistService) { 
  }

  ngOnInit(): void {
    this.restaurants=this._restlistService.getRestaurants();
  }
  onSelect(restaurant){
    console.log(restaurant);
    this.router.navigate(['/restaurant',restaurant.restaurantId]);
    //let Dish=this.restaurants[id];
  }
}
