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
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';

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
    SearchComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [MockDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
