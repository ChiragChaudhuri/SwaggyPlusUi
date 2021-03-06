import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestlistService {

  constructor(private http:HttpClient) { }

  getRestaurants(){
  	return[{restaurantId:1,
      restaurantName:"Panna",
      isActive:true,
      restaurantAddress:"Behala",
      rating:4,
      /*dish:[{dishId:11,
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
         price:15}]*/},
     {restaurantId:2,
       restaurantName:"Arsalan",
       isActive:true,
       restaurantAddress:"Taratala"
       ,rating:4.5,
      /* dish:[{dishId:21,
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
         price:35}]
       */},
         {restaurantId:3,
         restaurantName:"KFC"
         ,isActive:true
         ,restaurantAddress:"Sakherbazar",
         rating:3,/*dish:[{dishId:11,
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
         price:15}]*/},
         {restaurantId:4,
          restaurantName:"Starbucks",
          isActive:false,
          restaurantAddress:"Park Street",
          rating:5,/*dish:[{dishId:21,
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
         price:35}]*/}];
  }

  showAllRes(){
    return this.http.get(`http://localhost:8080/restaurant/showrestaurants`)
  }

}
