import { Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RestlistService} from '../restlist.service'

@Component({
  selector:'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  public restaurantId;
   restaurants : any;
  constructor(private route:ActivatedRoute,private _restlistService: RestlistService) { 
  }
  ngOnInit(): void {
    let id=parseInt(this.route.snapshot.paramMap.get('id'));
    this.restaurants=this._restlistService.getRestaurants();
    this.restaurantId=id;
    console.log(this.restaurants[id-1]);
  }
  addtoCart(d){
    console.log(d);
    alert(d.dishName+" added to Cart");
  }


}
