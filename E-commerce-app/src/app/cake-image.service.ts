import { Injectable } from '@angular/core';

@Injectable()
export class CakeImageService {
  private cakes: any[] = [
    {
      id: 1,
      Name: 'Minecraft Cake',
      imageUrl: '/assets/images/Gallery-photos/cake-photos/cake5.jpg',
    },

    {
      id: 2,
      Name: 'BTS Cake',
      imageUrl: '/assets/images/Gallery-photos/cake-photos/cake6.jpg',
    },

    {
      id: 3,
      Name: 'Sunflower Cake',
      imageUrl: '/assets/images/Gallery-photos/cake-photos/cake11.jpg',
    },

    {
      id: 4,
      Name: 'Beehive Cake',
      imageUrl: '/assets/images/Gallery-photos/cake-photos/cake10.jpg',
    },

    {
      id: 5,
      Name: 'Rose Portrait Cake',
      imageUrl: '/assets/images/Gallery-photos/cake-photos/cake16.jpg',
    },

    {
      id: 6,
      Name: 'Lion Cake',
      imageUrl: '/assets/images/Gallery-photos/cake-photos/cake22.jpg',
    },

    {
      id: 7,
      Name: 'Hello Kitty Cake',
      imageUrl: '/assets/images/Gallery-photos/cake-photos/cake9.jpg',
    },

    {
      id: 8,
      Name: 'Princess Crown Cake',
      imageUrl: '/assets/images/Gallery-photos/cake-photos/cake13.jpg',
    },

    {
      id: 9,
      Name: 'White Poodle Cake',
      imageUrl: '/assets/images/Gallery-photos/cake-photos/cake14.jpg',
    },
    {
      id: 10,
      Name: 'Pink Ombre Rosette Cake',
      imageUrl: '/assets/images/Gallery-photos/cake-photos/cake17.jpg',
    },

    {
      id: 11,
      Name: 'Brown Dog Cake',
      imageUrl: '/assets/images/Gallery-photos/cake-photos/cake12.jpg',
    },

    {
      id: 12,
      Name: 'Blackpink Cake',
      imageUrl: '/assets/images/Gallery-photos/cake-photos/cake19.jpg',
    },
    {
      id: 13,
      Name: 'Candy Drip Cake',
      imageUrl: '/assets/images/Gallery-photos/cake-photos/cake23.jpg',
    },

    {
      id: 14,
      Name: 'Fondant BTS Cake',
      imageUrl: '/assets/images/Gallery-photos/cake-photos/cake24.jpg',
    },

    {
      id: 15,
      Name: 'Unicorn Cake',
      imageUrl: '/assets/images/Gallery-photos/cake-photos/cake25.jpg',
    },
  ];

    getCakeImages(): any[] {
      return this.cakes;
    }
  }
