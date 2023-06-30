import { Component } from '@angular/core';
import { BakedGoodsImageService } from '../baked-goods-image.service';

@Component({
  selector: 'app-baked-goods-gallery',
  templateUrl: './baked-goods-gallery.component.html',
  styleUrls: ['./baked-goods-gallery.component.css']
})
export class BakedGoodsGalleryComponent {
  goods!: any[];

  constructor(private BakedGoodsImageService: BakedGoodsImageService) {}

  ngOnInit (){
    this.goods = this.BakedGoodsImageService.getGoodsImages();
  }

}
