import { Component } from '@angular/core';
import { SeasonalImageService } from '../seasonal-image.service';

@Component({
  selector: 'app-seasonal-offer-gallery',
  templateUrl: './seasonal-offer-gallery.component.html',
  styleUrls: ['./seasonal-offer-gallery.component.css']
})
export class SeasonalOfferGalleryComponent {
    seasonals: any [] = [];

    constructor(private SeasonalImageService: SeasonalImageService) { }

    ngOnInit () {
      this.seasonals = this.SeasonalImageService.getSeasonalImages();
    }
}
