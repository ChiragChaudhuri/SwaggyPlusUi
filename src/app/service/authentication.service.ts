import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DishlistService } from '../dishlist.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) {
   }
 
  addToCart(userId, dishId){
    return this.http.post(`http://localhost:8080/user/${userId}/cart/${dishId}`,{})
  }
  showAllCart(id){
    return this.http.get(`http://localhost:8080/user/cart/dish?userId=${id}`)
  }

  netcost(id){
    return this.http.get(`http://localhost:8080/user/${id}/cart/netcost`)
  }

  removeFromCart(userId,dishId){
    return this.http.delete(`http://localhost:8080/user/${userId}/cart/dish?dishId=${dishId}`)
  }

  loginHandle(user){
   return this.http.post(`http://localhost:8080/user/login`,user)

  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('userId')
    return !(user === null)
  }

  getUserName(id){
    return this.http.get(`http://localhost:8080/user/getUserName?Id=${id}`,{responseType:'text' as 'json'})
  }

  getCurrentUserName(){
    return sessionStorage.getItem('userName')
  }
    logOut() {
    sessionStorage.clear();
  }
}


export class User{
  id:string
  password:string

  constructor(id:string, password:string){
    this.id = id
    this.password = password
  }
}

