import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) {
   }
  authenticate(username, password) {
    if (username === "Chirag" && password === "password") {
      sessionStorage.setItem('username', username)
      return true;
    } else {
      return false;
    }
  }

  loginHandle(user){
   return this.http.post(`http://localhost:8080/user/login`,user)

  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    return !(user === null)
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

