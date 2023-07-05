import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../mock-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  cartItemCount: number=0;

  constructor (private mockDataService: MockDataService) {

  }
  ngOnInit(): void {
    this.mockDataService.getCartList().subscribe(item =>
      {
       this.cartItemCount=item.length;
      })
  }
}
