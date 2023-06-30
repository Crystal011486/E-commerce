import { Injectable } from '@angular/core';

@Injectable()
export class SeasonalImageService {
  private seasonals: any[] = [
    {
      id: 1,
      Name: 'valentines designed bento cake and cupcake',
      imageUrl: '/assets/images/Gallery-photos/seasonal-offer-photos/valentine-bento.jpg',
    },

    {
      id: 2,
      Name: 'christmas designed bento cake and cupcake',
      imageUrl: '/assets/images/Gallery-photos/seasonal-offer-photos/xmas-bento.jpg',
    },

    {
      id: 3,
      Name: 'halloween designed bento cake and cupcake',
      imageUrl: '/assets/images/Gallery-photos/seasonal-offer-photos/bento-package.jpg',
    },

    {
      id: 4,
      Name: 'flower Cupcake bouquet',
      imageUrl: '/assets/images/Gallery-photos/seasonal-offer-photos/cupcake-bouquet.jpg',
    },

    {
      id: 5,
      Name: 'flower Cupcake bouquet',
      imageUrl: '/assets/images/Gallery-photos/seasonal-offer-photos/cupcake-bouquet2.jpg',
    },

    {
      id: 6,
      Name: 'flower Cupcake bouquet',
      imageUrl: '/assets/images/Gallery-photos/seasonal-offer-photos/bouquet1.jpg',
    },

    {
      id: 7,
      Name: 'mini heart cake',
      imageUrl: '/assets/images/Gallery-photos/seasonal-offer-photos/heart1.jpg',
    },

    {
      id: 8,
      Name: 'mini heart cake',
      imageUrl: '/assets/images/Gallery-photos/seasonal-offer-photos/heart2.jpg',
    },

    {
      id: 9,
      Name: 'mini heart cake',
      imageUrl: '/assets/images/Gallery-photos/seasonal-offer-photos/heart3.jpg',
    },
    {
      id: 10,
      Name: 'mini christmas cake',
      imageUrl: '/assets/images/Gallery-photos/seasonal-offer-photos/xmascake.jpg',
    },

    {
      id: 11,
      Name: 'mini christmas cake',
      imageUrl: '/assets/images/Gallery-photos/seasonal-offer-photos/xmascake2.jpg',
    },

    {
      id: 12,
      Name: 'mini christmas cake',
      imageUrl: '/assets/images/Gallery-photos/seasonal-offer-photos/xmascake3.jpg',
    },
  ];

    getSeasonalImages(): any[] {
      return this.seasonals;
    }
  }
