import { Injectable } from '@angular/core';

@Injectable()
export class MockDataService {
  productDetails: any;
  private products: any[] = [

      { id:1,
      Name: 'Chocolate Cake',
      Description1: '8 inches custom chocolate cake  with vanilla buttercream frosting.',
      Description2:'Moist and fluffy chocolate cake with just the right amount of sweetness. A chocolatey cake that is wonderfully met with a sweet, mild vanilla filling or frosting',
      Price: '900.00',
      imageUrl:'/assets/images/cakes/chocolate-cake.jpg',
      Type:'Cake'
      },

      {id: 2,
      Name: 'Carrot Cake',
      Description1: '8 inches custom carrot cake with creamcheese frosting.',
      Description2:'Sweet and moist spiced cake, full of carrots and toasted nut, and covered with creamcheese frosting',
      Price: '900.00',
      imageUrl:'/assets/images/cakes/carrot-cake.jpg',
      Type:'Cake'
      },

      {id: 3,
      Name: 'Red Velvet Cake',
      Description1: '8 inches custom red velvet cake with vanilla buttercream frosting.',
      Description2: 'Moist, fluffy with a mild cocoa taste is what our red velvet cake is. Smooth, soft, tender and light with creamy icing.',
      Price: '900.00',
      imageUrl:'/assets/images/cakes/redvelvet-cake.jpg',
      Type: 'Cake'
      },

      { id:4,
      Name: 'Chocolate Cupcakes',
      Description1: '12 pcs. custom chocolate cupcakes topped with vanilla buttercream frosting',
      Description2: 'Moist and soft chocolate cupcakes that is bursting with rich, chocolaty flavor',
      Price: '380.00',
      imageUrl:'/assets/images/cupcakes/chocolate-cupcakes.jpg',
      Type: 'Cupcake'
      },

      {id: 5,
      Name: 'Cookies and Cream Cupcakes',
      Description1: '12 pcs. custom cookies and cream cupcakes topped with vanilla buttercream frosting',
      Description2: ' Soft and fluffy cookies and cream cupcakes. We used pieces of Oreo cookies for the cupcake for the cookies and cream taste.',
      Price: '380.00',
      imageUrl:'/assets/images/cupcakes/cookiesandcream-cupcakes.jpg',
      Type:'Cupcake'
      },

      {id: 6,
      Name: 'Red velvet cupcake',
      Description1: '12 pcs. custom red velvet cupcakes with vanilla buttercream frosting',
      Description2: 'Unworldly moist, very buttery, full of vanilla flavor with a hint of chocolate goodness. That is our fluffy and moist red velvet cupcakes.',
      Price: '380.00',
      imageUrl:'/assets/images/cupcakes/redvelvet-cupcakes.jpg',
      Type:'Cupcake'
      },

      {id:7,
      Name: 'Double Chocolate Brownies',
      Description1: '4pcs. per pack double chocolate brownies with chocolate chunks inside.',
      Description2:'Fudgy cocoa brownies with just the right amount of sweetness with deep, bittersweet chocolate flavor from the chocoalte chunks.',
      Price: '140.00',
      imageUrl:'/assets/images/baked-goods/brownies.jpg',
      Type:'Baked Goods'
      },

      {id:8,
      Name: 'Chocolate Crinkles',
      Description1: '10 pcs. per pack chocolate crinkles. Soft & fudge-like cookies in powdered sugar.',
      Description2: 'Decadently rich and chocolatey cookie with a melt-in-your mouth fudgy softness. Crispy on the outside and soft on the inside chocolate crinkles.',
      Price: '120.00',
      imageUrl:'/assets/images/baked-goods/choco-crinkles.jpg',
      Type: 'Baked Goods'
      },

      {id:9,
      Name: 'Chocolate Chip Cookies',
      Description1: '5 pcs. per pack chocolate chip cookies. Crunchy cookies with chocolate chips inside.',
      Description2: 'Soft and chewy with crisp edges and chewy middles. Full of sweet butterscotch & chocolate flavors. Perfect to pair with warm glass of milk.',
      Price: '100.00',
      imageUrl:'/assets/images/baked-goods/chocochip-cookies.jpg',
      Type:'Baked Goods'
      },

      {id:10,
      Name: 'Cupcake Bouquet',
      Description1: '7 pcs. flower designed chocolate cupcakes arranged as a bouquet.',
      Description2: 'Moist and chocolatey chocolate cupcakes made from several different hand piped buttercream icing flowers to create a realistic bouquet look.',
      Price: '650.00',
      imageUrl:'/assets/images/seasonal/cupcake-bouquet.jpg',
      Type:'Seasonal offers'
      },

      {id:11,
      Name: 'Christmas Mini Cakes',
      Description1: '5 inches Christmas themed moist chocolate with vanilla buttercream frosting cakes.',
      Description2: 'A Mini version of our popular chocolate cake. Moist chocolate cake with christmas buttercream icing design for a holiday vibe.',
      Price: '300.00',
      imageUrl:'/assets/images/seasonal/xmascake.jpg',
      Type:'Seasonal offers'
      },

      {id:12,
      Name: 'Bento Cake Package',
      Description1: '4 inch custom moist chocolate cake with 8 pcs custom chocolate cupcakes.',
      Description2: 'A collection of chocolate mini cake and chocolate cupcakes in one box. And can be customized to your liking and any occasion that calls for it.',
      Price: '1000.00',
      imageUrl:'/assets/images/seasonal/bento-package.jpg',
      Type:'Seasonal offers'
      },

      {id:13,
      Name: 'Valentine Mini Heart Cake',
      Description1: '5 inch heart shaped moist chocolate cake with vanilla buttercream frosting',
      Description2: 'A Mini version of our popular chocolate cake in a heart shape. Frosted and designed to fit valentines day theme perfect for your love ones.  ',
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

    getProductDetails(product:any) {
      this.productDetails=product;
      //console.log(this.productDetails);
    }
  }
