import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DishlistService {

  constructor(private http:HttpClient) { }
  // getDishes(){
  // dish:[{dishId:11,
  //       dishName:"Biriyani",
  //       shortDescription:"Premium Kolkata Special Biriyani with Aloo",
  //        imageUrl:"",
  //        isVeg:false,
  //        freeDelivery:false,
  //        price:240,resid:1},
  //        {dishId:12,
  //       dishName:"Mixed Chowmein",
  //       shortDescription:"Gravy Chowmein cooked with Prawn,Chicken and Veggies",
  //        imageUrl:"",
  //        isVeg:false,
  //        freeDelivery:true,
  //        price:170,resid:1},
  //        {dishId:13,
  //       dishName:"Tandoori Roti",
  //       shortDescription:"Plain Tawa Rooti served hot and cripsy",
  //        imageUrl:"",
  //        isVeg:true,
  //        freeDelivery:true,
  //        price:15,resid:2},{dishId:21,
  //       dishName:"Special Biriyani",
  //       shortDescription:"Premium Kolkata Special Biriyani with Aloo",
  //        imageUrl:"",
  //        isVeg:false,
  //        freeDelivery:false,
  //        price:350,resid:2},{dishId:22,
  //        dishName:"Egg Roll",
  //       shortDescription:"Crispy Snack served Hot",
  //        imageUrl:"",
  //        isVeg:false,
  //        freeDelivery:false,
  //        price:35,resid:2},{dishId:11,
  //       dishName:"Hariyali Chicken",
  //       shortDescription:"North Indian Chicken Dish",
  //        imageUrl:"",
  //        isVeg:false,
  //        freeDelivery:false,
  //        price:240,resid:1},
  //        {dishId:12,
  //       dishName:"Hakka Chowmein",
  //       shortDescription:"Packed and Ready to Serve",
  //        imageUrl:"",
  //        isVeg:false,
  //        freeDelivery:true,
  //        price:170,resid:1},
  //        {dishId:13,
  //       dishName:"Cold Coffee",
  //       shortDescription:"Premium and Quickly Served",
  //        imageUrl:"",
  //        isVeg:true,
  //        freeDelivery:true,
  //        price:15,resid:4},{dishId:13,
  //       dishName:"Chicken BBQ Wings",
  //       shortDescription:"Chicken Wings served with Dips",
  //        imageUrl:"",
  //        isVeg:true,
  //        freeDelivery:true,
  //        price:15,resid:3},{dishId:13,
  //       dishName:"Starbucks Special",
  //       shortDescription:"Special Drinks served only on weekends",
  //        imageUrl:"",
  //        isVeg:true,
  //        freeDelivery:true,
  //        price:15,resid:4},{dishId:13,
  //       dishName:"Latte Drink",
  //       shortDescription:"Served delicious and strong",
  //        imageUrl:"",
  //        isVeg:true,
  //        freeDelivery:true,
  //        price:15,resid:4},{dishId:13,
  //       dishName:"Ice Shakes",
  //       shortDescription:"Available in 3 flavours",
  //        imageUrl:"",
  //        isVeg:true,
  //        freeDelivery:true,
  //        price:15,resid:3},{dishId:13,
  //       dishName:"Big Combo Basket",
  //       shortDescription:"Chicken Wings Combo Pack with Dips and Mayo",
  //        imageUrl:"",
  //        isVeg:true,
  //        freeDelivery:true,
  //        price:15,resid:3}]
  // }
  
  getDishes(resId){

    return this.http.get(`http://localhost:8080/restaurant/dishes?id=${resId}`)
  }

}
