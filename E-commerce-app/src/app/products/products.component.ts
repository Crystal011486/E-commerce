import { Component, Input, Output } from '@angular/core';
import { MockDataService } from '../mock-data.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: any[] = [];
  selectedProduct: any;

  constructor (private mockDataService: MockDataService, private cartService: CartService) {}
//fetch data from mock data service//
  ngOnInit() {
    this.products = this.mockDataService.getProducts();
   // this.selectedProduct = this.mockDataService.getProductsById(4);
   // console.log (this.products);

  }
//displays number of items per categories in filter radio button//
  getTotalProducts() {
    return this.products.length;
  }

  getTotalCake() {
    return this.products.filter(products => products.Type === 'Cake').length;
  }

  getTotalCupcake() {
    return this.products.filter(products => products.Type === 'Cupcake').length;
  }

  getTotalBakedGoods() {
    return this.products.filter(products => products.Type === 'Baked Goods').length;
  }

  getTotalSeasonalOffers() {
    return this.products.filter(products => products.Type === 'Seasonal offers').length;
  }

  productCountRadioButton: string = 'All';
  searchText: string = '';


//displays products from selected radio button//
  onFilterRadioButtonChange(data: string) {
    this.productCountRadioButton = data;
    //console.log (this.productCountRadioButton );//
  }

  selectProduct(id:number) {
    this.selectedProduct = this.mockDataService.getProductsById(id);
    //console.log(this.selectedProduct);
   // console.log(this.selectedProduct);
    console.log(this.selectedProduct);
   // console.log(this.selectedProduct);
    this.mockDataService.getProductDetails(this.selectedProduct);
  }
}




