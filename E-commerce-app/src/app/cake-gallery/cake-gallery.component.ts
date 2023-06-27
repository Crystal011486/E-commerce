import { Component } from '@angular/core';
import { CakeImageService } from '../cake-image.service';
@Component({
  selector: 'app-cake-gallery',
  templateUrl: './cake-gallery.component.html',
  styleUrls: ['./cake-gallery.component.css']
})
export class CakeGalleryComponent {
  cakes: any[] = [];

  constructor (private CakeImageService: CakeImageService ) {}

  ngOnInit() {
    this.cakes = this.CakeImageService.getCakeImages();
   console.log(this.cakes);


  }
}
