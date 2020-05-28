import { Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DishlistService} from '../dishlist.service'

@Component({
  selector:'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  public restaurantId;
   dishes : any;
   selectdish =[];
  constructor(private route:ActivatedRoute,private _dishlistService: DishlistService) { 
  }
  ngOnInit(): void {
    let id=parseInt(this.route.snapshot.paramMap.get('id'));
    this.dishes=this._dishlistService.getDishes();
    this.restaurantId=id;
    console.log(this.restaurantId);
    this.selectdish=this.dishes.filter(function(dishes){
      return (this.dish.resid==this.restaurantId)
    })
    console.log(this.dishes);
  }
  addtoCart(d){
    console.log(d);
    alert(d.dishName+" added to Cart");
  }
}
