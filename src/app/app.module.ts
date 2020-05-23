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
import { AboutComponent } from './about/about.component'


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavbarComponent,
    WelcomeComponent,
    FooterComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [RestlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
