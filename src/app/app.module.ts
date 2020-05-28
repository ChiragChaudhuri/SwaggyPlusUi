import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routingComponents,AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import {MaterialModule} from './material/material.module'
import {RestlistService} from './restlist.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { LogoutComponent } from './logout/logout.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavbarComponent,
    WelcomeComponent,
    FooterComponent,
    AboutComponent,
    LogoutComponent,
    LoginComponent,
    UserComponent,
    AdminloginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [RestlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
