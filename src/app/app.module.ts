import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchboxComponent } from './shared/components/searchbox/searchbox.component';
import { AddtocartComponent } from './shared/components/addtocart/addtocart.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ProductsComponent } from './modules/products/products.component';
import { ListofproductsComponent } from './modules/products/listofproducts/listofproducts.component';
import { ViewproductComponent } from './modules/products/viewproduct/viewproduct.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SearchboxComponent,
    AddtocartComponent,
    FooterComponent,
    ProductsComponent,
    ListofproductsComponent,
    ViewproductComponent,
    HeaderComponent,
    CarouselComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
