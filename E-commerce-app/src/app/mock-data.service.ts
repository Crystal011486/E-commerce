import { Injectable } from '@angular/core';

@Injectable()
export class MockDataService {
  private products: any[] = [

      { id:1,
      Name: 'Chocolate Cake',
      Description: '8 inches custom chocolate cake. Moist and fluffy chocolate cake with vanilla buttercream frosting',
      Price: '900.00',
      imageUrl:'/assets/images/cakes/chocolate-cake.jpg',
      Type:'Cake'
      },

      {id: 2,
      Name: 'Carrot Cake',
      Description: '8 inches custom carrot cake. Moist spiced and sweet carrot cake with creamcheese frosting',
      Price: '900.00',
      imageUrl:'/assets/images/cakes/carrot-cake.jpg',
      Type:'Cake'
      },

      {id: 3,
      Name: 'Red Velvet Cake',
      Description: '8 inches custom red velvet cake. Moist, fluffy with a mild cocoa taste is what our red velvet cake is with vanilla buttercream frosting',
      Price: '900.00',
      imageUrl:'/assets/images/cakes/redvelvet-cake.jpg',
      Type: 'Cake'
      },

      { id:4,
      Name: 'Chocolate Cupcakes',
      Description: '12 pcs. custom chocolate cupcakes. Moist and soft chocolate cupcakes topped with vanilla buttercream frosting',
      Price: '380.00',
      imageUrl:'/assets/images/cupcakes/chocolate-cupcakes.jpg',
      Type: 'Cupcake'
      },

      {id: 5,
      Name: 'Cookies and Cream Cupcakes',
      Description: '12 pcs. custom cookies and cream cupcakes. Moist and fluffy cookies and cream cupcakes. We used crumbs Oreo cookies for the cupcake and topped with vanilla buttercream frosting',
      Price: '380.00',
      imageUrl:'/assets/images/cupcakes/cookiesandcream-cupcakes.jpg',
      Type:'Cupcake'
      },

      {id: 6,
      Name: 'Red velvet cupcake',
      Description: '12 pcs. custom red velvet cupcakes. Moist and fluffy red velvet cupcakes with vanilla buttercream frosting',
      Price: '380.00',
      imageUrl:'/assets/images/cupcakes/redvelvet-cupcakes.jpg',
      Type:'Cupcake'
      },

      {id:7,
      Name: 'Double Chocolate Brownies',
      Description: '4pcs. per pack double chocolate brownies. Fudgy brownies with chocolate chunks inside.',
      Price: '140.00',
      imageUrl:'/assets/images/baked-goods/brownies.jpg',
      Type:'Baked Goods'
      },

      {id:8,
      Name: 'Chocolate Crinkles',
      Description: '10 pcs. per pack chocolate crinkles. Crispy on the outside and soft on the inside chocolate crinkles drenched in powdered sugar.',
      Price: '120.00',
      imageUrl:'/assets/images/baked-goods/choco-crinkles.jpg',
      Type: 'Baked Goods'
      },

      {id:9,
      Name: 'Chocolate Chip Cookies',
      Description: '5 pcs. per pack chocolate chip cookies. Crunchy cookies with chocolate chips inside.',
      Price: '100.00',
      imageUrl:'/assets/images/baked-goods/chocochip-cookies.jpg',
      Type:'Baked Goods'
      },

      {id:10,
      Name: 'Cupcake Bouquet',
      Description: '7 pcs. chocolate cupcakes with flower designed vaniila buttercream frosting arranged as a bouquet.',
      Price: '650.00',
      imageUrl:'/assets/images/seasonal/cupcake-bouquet.jpg',
      Type:'Seasonal offers'
      },

      {id:11,
      Name: 'Christmas  Mini Cakes',
      Description: '5 inches Christmas themed moist chocolate with vanilla buttercream frosting cakes.',
      Price: '300.00',
      imageUrl:'/assets/images/seasonal/xmascake.jpg',
      Type:'Seasonal offers'
      },

      {id:12,
      Name: 'Bento Cake & Cupcake Package',
      Description: '4 inch custom moist chocolate cake with 8 pcs custom chocolate cupcakes both with vanilla buttercream frosting.',
      Price: '1000.00',
      imageUrl:'/assets/images/seasonal/bento-package.jpg',
      Type:'Seasonal offers'
      },

      {id:13,
      Name: 'Valentine Mini Heart Cake',
      Description: '5 inch heart shaped moist chocolate cake with vanilla buttercream frosting',
      Price: '300.00',
      imageUrl:'/assets/images/seasonal/miniheart-cake.jpg',
      Type:'Seasonal offers'
      },
    ]

    //fetch products//
    getProducts(): any[] {
      return this.products;
    }

    getProductsById(id:number): any {
      return this.products.find(item => item.id == id);
    }
  }
