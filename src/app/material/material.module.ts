import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
const MaterialComponents =[
MatToolbarModule,MatButtonModule,MatCardModule]
@NgModule({
  imports: [MaterialComponents
  ],
  exports:[MaterialComponents]
})
export class MaterialModule { }
