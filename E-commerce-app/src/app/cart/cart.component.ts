import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { MockDataService } from '../mock-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartItem: any;
  cartArray: any[] = [];
  Totalpurchase: any;

  constructor(
    private activeRoute: ActivatedRoute,
    private mockDataService: MockDataService,
    private cartService: CartService,
    private routers: Router
  ) {}

  ngOnInit() {
    //console.log(this.cartArray);
    //console.log(this.cartItem);
    //updates cart Array for changes in Cartlist
      this.mockDataService.getCartList().subscribe((item) => {
      this.cartArray = item;
      this.Totalpurchase = this.mockDataService.getTotalPrice();
      this.mockDataService.getCartItemCount();
    });
  }
  //addToCart(cartItem:any) {
  // this.cartService.addToCart(this.cartItem);
  //console.log(this.cartItem);

  deleteItem(product: any) {
    this.mockDataService.removeCartItem(product);
  }

  clearCart() {
    this.cartArray = [];
  }
}
