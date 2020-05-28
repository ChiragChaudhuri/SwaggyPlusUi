import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

  constructor() { }
  authenticate(adminname, password) {
    if (adminname === "Admin" && password === "password") {
      sessionStorage.setItem('adminname', adminname)
      return true;
    } else {
      return false;
    }
  }
  isAdminLoggedIn() {
    let admin = sessionStorage.getItem('adminname')
    return !(admin === null)
  }
  logOut() {
    sessionStorage.clear();
  }
}
