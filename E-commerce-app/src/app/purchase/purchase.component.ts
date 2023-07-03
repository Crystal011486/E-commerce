import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MockDataService } from '../mock-data.service';
import { CartService } from '../cart.service';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  products: any [] = [];
  selectedProduct : any;
  FoundProduct: any;
  cartItem: any;


  constructor(
    private activeRoute:ActivatedRoute,
    private mockDataService:MockDataService,
    private cartService:CartService,
    private routers: Router) {}

  ngOnInit() {
    this.getProducts();
    console.log (this.products);
    //console.log (this.selectedProduct);
   //console.log(id);
   this.FoundProduct=this.mockDataService.productDetails;
   //console.log(this.FoundProduct);
  }

  getProducts(){
    this.products = this.mockDataService.getProducts();
  }
  addToCart(item: any) {
    this.cartItem=this.FoundProduct.push(this.FoundProduct);

    console.log(this.cartItem);
  }



}

