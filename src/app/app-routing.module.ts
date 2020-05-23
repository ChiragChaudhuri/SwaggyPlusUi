import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {UserDashboardComponent} from './user-dashboard/user-dashboard.component';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component'
import {ResturantListComponent} from './resturant-list/resturant-list.component'
import {RestaurantComponent} from './restaurant/restaurant.component';
import {CartComponent} from './cart/cart.component';
import { AddrestComponent } from './addrest/addrest.component';
import { EditrestComponent } from './editrest/editrest.component';
import { ErrorComponent } from './error/error.component';
import  {AboutComponent} from './about/about.component';


const routes: Routes = [{path:'',
           component:AppComponent},
           {path:'about',
             component:AboutComponent},
            {path:'user-dashboard',
                component:UserDashboardComponent},
            {path:'admin-dashboard',
                component:AdminDashboardComponent},
            {path:'restaurant-list',
                component:ResturantListComponent},
            {path:'restaurant/:id',
                component:RestaurantComponent,
                  children: [{path:'add',
                component:AddrestComponent},
           {path:'edit',
                component:EditrestComponent}]},
          {path:'cart',
                component:CartComponent},
          {path:'**',
                component:ErrorComponent},];

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
  ErrorComponent]