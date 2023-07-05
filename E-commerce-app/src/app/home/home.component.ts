import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  slides: string[];
  private subscription: any;
  i: number;

  constructor() {
    this.i = 0;

    this.slides = [
      '/assets/images/home-images/baked-fresh.jpg',

      '/assets/images/home-images/quality-ingredients.jpg',

      '/assets/images/home-images/baking-with-love.jpg',
    ];
    this.subscription = interval(3000).subscribe(() => {

      // Code to be executed every 2 seconds

      this.getNext();

    });
  }

  getSlide() {
    return this.slides[this.i];
  }

  getPrev() {
    this.i == 0 ? (this.i = this.slides.length - 1) : this.i--;
  }

  getNext() {
    this.i < this.slides.length - 1 ? this.i++ : (this.i = 0);
  }

}
