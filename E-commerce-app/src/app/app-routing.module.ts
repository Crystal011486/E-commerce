import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CakeGalleryComponent } from './cake-gallery/cake-gallery.component';
import { CupcakeGalleryComponent } from './cupcake-gallery/cupcake-gallery.component';
import { SeasonalOfferGalleryComponent } from './seasonal-offer-gallery/seasonal-offer-gallery.component';
import { BakedGoodsGalleryComponent } from './baked-goods-gallery/baked-goods-gallery.component';

const routes: Routes = [
  {path: '', redirectTo: '/landing-page', pathMatch: 'full'},
  {path: 'landing-page', component: LandingPageComponent},
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'cake-gallery', component: CakeGalleryComponent},
  {path: 'cupcake-gallery', component: CupcakeGalleryComponent},
  {path: 'seasonal-offer-gallery', component: SeasonalOfferGalleryComponent},
  {path: 'baked-goods-gallery', component: BakedGoodsGalleryComponent},
  {path: '**', component: ErrorPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

