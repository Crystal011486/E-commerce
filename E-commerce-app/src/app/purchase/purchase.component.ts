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


  constructor(
    private activeRoute:ActivatedRoute,
    private mockDataService:MockDataService,
    private cartService:CartService,) {}

  ngOnInit() {
    this.products = this.mockDataService.getProducts();
    console.log (this.products);
    //console.log (this.selectedProduct);
   //console.log(id);
  }

  getProducts(){
    this.products = this.mockDataService.getProducts();
  }

  getSelectedProduct(id:number) {
    this.selectedProduct = this.mockDataService.getProductsById(id)
    console.log(this.selectedProduct);
  }


}

