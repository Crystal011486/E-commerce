import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MockDataService } from './mock-data.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';
import { GalleryComponent } from './gallery/gallery.component';
import { CakeGalleryComponent } from './cake-gallery/cake-gallery.component';
import { CupcakeGalleryComponent } from './cupcake-gallery/cupcake-gallery.component';
import { SeasonalOfferGalleryComponent } from './seasonal-offer-gallery/seasonal-offer-gallery.component';
import { BakedGoodsGalleryComponent } from './baked-goods-gallery/baked-goods-gallery.component';
import { CakeImageService } from './cake-image.service';
import { CupcakeImageService } from './cupcake-image.service';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SeasonalImageService } from './seasonal-image.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    HomeComponent,
    LandingPageComponent,
    HomeComponent,
    FooterComponent,
    AboutUsComponent,
    ErrorPageComponent,
    FilterComponent,
    GalleryComponent,
    CakeGalleryComponent,
    CupcakeGalleryComponent,
    SeasonalOfferGalleryComponent,
    BakedGoodsGalleryComponent,
    ContactUsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [MockDataService, CakeImageService, CupcakeImageService, SeasonalImageService],

  bootstrap: [AppComponent],
})
export class AppModule {}
