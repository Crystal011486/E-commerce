import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private activeRoute:ActivatedRoute, private mockDataService:MockDataService, private cartService:CartService) {}

  ngOnInit() {
    let id=this.activeRoute.snapshot.paramMap.get('id');
   console.log(id);
  }

  getSelectedProduct(id:number) {
    this.selectedProduct = this.mockDataService.getProductsById(id)
    //console.log(this.selectedProduct)
  }


}

