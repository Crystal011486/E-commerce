import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { MockDataService } from '../mock-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {


  constructor (
    private activeRoute: ActivatedRoute,
    private mockDataService: MockDataService,
    private cartService: CartService,
    private routers: Router
  ) {}

}
