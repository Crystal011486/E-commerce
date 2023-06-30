import { Injectable } from '@angular/core';

@Injectable()
export class CupcakeImageService {
  private cupcakes: any[] = [
    {
      id: 1,
      Name: 'multidesigned cupcake',
      imageUrl: '/assets/images/Gallery-photos/cupcakes-photos/cupcake2.jpg',
    },

    {
      id: 2,
      Name: 'Lion Cupcake',
      imageUrl: '/assets/images/Gallery-photos/cupcakes-photos/cupcake4.jpg',
    },

    {
      id: 3,
      Name: 'Pink Ombre Rose Cupcake',
      imageUrl: '/assets/images/Gallery-photos/cupcakes-photos/cupcake5.jpg',
    },

    {
      id: 4,
      Name: 'Belle Cupcake',
      imageUrl: '/assets/images/Gallery-photos/cupcakes-photos/cupcake6.jpg',
    },

    {
      id: 5,
      Name: 'Heart sprinkled Cupcake',
      imageUrl: '/assets/images/Gallery-photos/cupcakes-photos/cupcake8.jpg',
    },

    {
      id: 6,
      Name: 'BTS Cupcake',
      imageUrl: '/assets/images/Gallery-photos/cupcakes-photos/cupcake9.jpg',
    },

    {
      id: 7,
      Name: '2022 New Year Cupcake',
      imageUrl: '/assets/images/Gallery-photos/cupcakes-photos/cupcake10.jpg',
    },

    {
      id: 8,
      Name: 'Valentines Cupcake',
      imageUrl: '/assets/images/Gallery-photos/cupcakes-photos/cupcake11.jpg',
    },

    {
      id: 9,
      Name: 'Cat Cupcake',
      imageUrl: '/assets/images/Gallery-photos/cupcakes-photos/cupcake13.jpg',
    },
    {
      id: 10,
      Name: 'BTS Cupcake',
      imageUrl: '/assets/images/Gallery-photos/cupcakes-photos/cupcake12.jpg',
    },

    {
      id: 11,
      Name: 'Christmas Cupcake',
      imageUrl: '/assets/images/Gallery-photos/cupcakes-photos/xmas-cupcake.jpg',
    },

    {
      id: 12,
      Name: 'Baby Shark Cupcake',
      imageUrl: '/assets/images/Gallery-photos/cupcakes-photos/cupcake14.jpg',
    },
  ];

    getCupcakeImages(): any[] {
      return this.cupcakes;
    }
  }
