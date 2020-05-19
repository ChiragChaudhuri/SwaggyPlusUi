import { Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector:'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  public restaurantId;
   restaurants=[
    {restaurantId:1,
      restaurantName:"Panna",
      isActive:true,
      restaurantAddress:"Behala",
      rating:4,
      dish:[{dishId:11,
        dishName:"Biriyani",
        shortDescription:"Premium Kolkata Special Biriyani with Aloo",
         imageUrl:"",
         isVeg:false,
         freeDelivery:false,
         price:240},
         {dishId:12,
        dishName:"Mixed Chowmein",
        shortDescription:"Gravy Chowmein cooked with Prawn,Chicken and Veggies",
         imageUrl:"",
         isVeg:false,
         freeDelivery:true,
         price:170},
         ,{dishId:13,
        dishName:"Tandoori Roti",
        shortDescription:"Plain Tawa Rooti served hot and cripsy",
         imageUrl:"",
         isVeg:true,
         freeDelivery:true,
         price:15}]},
     {restaurantId:2,
       restaurantName:"Arsalan",
       isActive:true,
       restaurantAddress:"Taratala"
       ,rating:4.5,
       dish:[{dishId:21,
        dishName:"Special Biriyani",
        shortDescription:"Premium Kolkata Special Biriyani with Aloo",
         imageUrl:"",
         isVeg:false,
         freeDelivery:false,
         price:350},{dishId:22,
         dishName:"Egg Roll",
        shortDescription:"Crispy Snack served Hot",
         imageUrl:"",
         isVeg:false,
         freeDelivery:false,
         price:35}]},
         {restaurantId:3,
         restaurantName:"KFC"
         ,isActive:true
         ,restaurantAddress:"Sakherbazar",
         rating:3,dish:[{},{}]},
         {restaurantId:4,
          restaurantName:"Starbucks",
          isActive:false,
          restaurantAddress:"Park Street",
          rating:5,dish:[{},{}]}];
  constructor(private route:ActivatedRoute) { 
  }
  ngOnInit(): void {
    let id=parseInt(this.route.snapshot.paramMap.get('id'));
    this.restaurantId=id;
    console.log(this.restaurants[id-1]);
  }
  addtoCart(d){
    console.log(d);
    alert(d.dishName+" added to Cart");
  }


}
