import { Injectable } from '@angular/core';

@Injectable()
export class BakedGoodsImageService {
  private goods: any[] = [
    {
      id: 1,
      Name: 'chocolate brownies',
      imageUrl: '/assets/images/Gallery-photos/bakedgoods-photos/brownie1.jpg',
    },

    {
      id: 2,
      Name: 'chocolate brownies',
      imageUrl: '/assets/images/Gallery-photos/bakedgoods-photos/brownie2.jpg',
    },

    {
      id: 3,
      Name: 'chocolate brownies',
      imageUrl: '/assets/images/Gallery-photos/bakedgoods-photos/brownie3.jpg',
    },

    {
      id: 4,
      Name: 'chocolate crinkles',
      imageUrl: '/assets/images/Gallery-photos/bakedgoods-photos/choco-crinkles.jpg',
    },

    {
      id: 5,
      Name: 'chocolate crinkles',
      imageUrl: '/assets/images/Gallery-photos/bakedgoods-photos/crinkles1.jpg',
    },

    {
      id: 6,
      Name: 'chocolate crinkles',
      imageUrl: '/assets/images/Gallery-photos/bakedgoods-photos/crinkles2.jpg',
    },

    {
      id: 7,
      Name: 'mini heart cake',
      imageUrl: '/assets/images/Gallery-photos/bakedgoods-photos/chocochip-cookies.jpg',
    },

    {
      id: 8,
      Name: 'mini heart cake',
      imageUrl: '/assets/images/Gallery-photos/bakedgoods-photos/cookies1.jpg',
    },

    {
      id: 9,
      Name: 'mini heart cake',
      imageUrl: '/assets/images/Gallery-photos/bakedgoods-photos/cookies2.jpg',
    },

  ];

    getGoodsImages(): any[] {
      return this.goods;
    }
  }
