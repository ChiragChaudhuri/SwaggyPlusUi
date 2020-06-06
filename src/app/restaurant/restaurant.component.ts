import { Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DishlistService} from '../dishlist.service'
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector:'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  public restaurantId;
   dishes : any;
   selectdish : any;
  constructor(private route:ActivatedRoute,private _dishlistService: DishlistService, private service:AuthenticationService) { 
  }
  ngOnInit(): void {
     let id=parseInt(this.route.snapshot.paramMap.get('id'));

    this._dishlistService.getDishes(id).subscribe(
      data=> {console.log(data)
      this.selectdish = data
      }
    )



  }
  addtoCart(d){
    let userId = sessionStorage.getItem('userId')
    console.log(d);
    this.service.addToCart(userId, d.dish_id).subscribe(
      data=> {console.log(data)}
    )
    alert(d.dishName+" added to Cart");
  }
}
