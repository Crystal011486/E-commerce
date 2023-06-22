import { Component } from '@angular/core';
import { MockDataService } from '../mock-data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: any[] = [];
  selectedProduct: any;

  constructor (private mockDataService: MockDataService) {}

  ngOnInit() {
    this.products = this.mockDataService.getProducts();
    this.selectedProduct = this.mockDataService.getProductsById(2)
  }
}
