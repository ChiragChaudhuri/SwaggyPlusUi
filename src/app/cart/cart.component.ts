import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  dish: any
  price: any
  constructor(private service: AuthenticationService, private rout:ActivatedRoute) { }

  ngOnInit(): void {

    this.Refresh()
  }

  Remove(dish_id){

    let id = this.rout.snapshot.params['id']
    this.service.removeFromCart(id,dish_id).subscribe(
      data=> {
        console.log(data)
        this.Refresh()
      }
    )
  }

  Refresh(){

    let id = this.rout.snapshot.params['id']
    this.service.showAllCart(id).subscribe(
      data=> {this.dish = data
      console.log(this.dish)
      this.service.netcost(id).subscribe(
        data=> {this.price = data}
      )

      }
    )

   console.log(id)

  }
}
