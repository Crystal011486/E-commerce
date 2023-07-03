import { Injectable } from '@angular/core';
import { MockDataService } from './mock-data.service';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  items: any [] = [];
  selectedProduct: any;

   addToCart(item: any) {
    this.items.push(item);
    alert('You have added this item in your cart')
    console.log(item);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
  }
}

