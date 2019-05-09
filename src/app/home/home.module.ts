import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';


import { FooterComponent } from './footer/footer.component';

import { ContentComponent } from './content/content.component';
import { SanphamComponent } from './content/sanpham/sanpham.component';


@NgModule({
  declarations: [
    HomeComponent,
     HeaderComponent, 
     SliderComponent, 
     FooterComponent, 
     ContentComponent, 
     SanphamComponent
    ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    HeaderComponent, 
    SliderComponent, 
    ContentComponent, 
    SanphamComponent,
    FooterComponent
  ]
})
export class HomeModule { }
