import { Component } from '@angular/core';
import { CupcakeImageService } from '../cupcake-image.service';
@Component({
  selector: 'app-cupcake-gallery',
  templateUrl: './cupcake-gallery.component.html',
  styleUrls: ['./cupcake-gallery.component.css']
})
export class CupcakeGalleryComponent {
  cupcakes: any[] = [];
  constructor (private CupcakeImageService: CupcakeImageService) {}

  ngOnInit() {
    this.cupcakes = this.CupcakeImageService.getCupcakeImages();
   //console.log(this.cupcakes);
  }
}
