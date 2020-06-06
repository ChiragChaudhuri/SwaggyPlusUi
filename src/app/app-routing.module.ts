import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {UserDashboardComponent} from './user-dashboard/user-dashboard.component';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
import {ResturantListComponent} from './resturant-list/resturant-list.component'
import {RestaurantComponent} from './restaurant/restaurant.component';
import {CartComponent} from './cart/cart.component';
import { AddrestComponent } from './addrest/addrest.component';
import { EditrestComponent } from './editrest/editrest.component';
import { ErrorComponent } from './error/error.component';
import  {AboutComponent} from './about/about.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import {AdminloginComponent} from './adminlogin/adminlogin.component';
import { AuthGuardService } from './service/auth-guard.service';
import {AdminGuardService} from './service/admin-guard.service';
import { WelcomeComponent } from './welcome/welcome.component';
import  {AdminsignupComponent} from './adminsignup/adminsignup.component';
import {UsersignupComponent} from './usersignup/usersignup.component';

const routes: Routes = [{path:'',
           component:WelcomeComponent},
           {path:'about',
             component:AboutComponent},
            {path:'user-dashboard',
                component:UserDashboardComponent,canActivate:[AuthGuardService]},
            {path:'admin-dashboard',
                component:AdminDashboardComponent},
            {path:'restaurant-list',
                component:ResturantListComponent,canActivate:[AuthGuardService],
                  children: [{path:'add',
                component:AddrestComponent},
                             {path:'edit',
                component:EditrestComponent}]},
            {path:'restaurant/:id',
                component:RestaurantComponent,canActivate:[AuthGuardService] },
          {path:'cart/:id', 
                component:CartComponent,canActivate:[AuthGuardService] },
          {path:'login',
                 component:LoginComponent},
          {path:'admin-login',
                    component:AdminloginComponent},
          {path:'logout',
                 component:LogoutComponent },
          {path:'/user-signup',
                  component:UsersignupComponent},
          {path:'/admin-signup',
                  component:AdminsignupComponent},
          {path:'**',
                component:ErrorComponent},
                ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[
  UserDashboardComponent,
  AdminDashboardComponent,
  ResturantListComponent,
  RestaurantComponent,
  CartComponent,AddrestComponent,EditrestComponent,
  ErrorComponent,LoginComponent,LogoutComponent,AdminloginComponent]