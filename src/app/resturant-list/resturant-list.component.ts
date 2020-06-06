import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {RestlistService} from '../restlist.service'
@Component({
  selector: 'app-resturant-list',
  templateUrl: './resturant-list.component.html',
  styleUrls: ['./resturant-list.component.css']
})
export class ResturantListComponent implements OnInit {
  //restaurants: any;
  //private r:Restlist
  restaurants:any;
  restaurants2:any;
  constructor(private router:Router,private _restlistService: RestlistService) { 
  }

  ngOnInit(): void {
    this.restaurants=this._restlistService.getRestaurants();
    this._restlistService.showAllRes().subscribe(
      data=> {console.log(data)
      
      this.restaurants2 = data
      console.log(this.restaurants2)
      }
    )
  }
  onSelect(resId){
    console.log(resId);
    this.router.navigate(['/restaurant',resId]);
    //let Dish=this.restaurants[id];
  }
}
