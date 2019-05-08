import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { PhoneComponent } from './phone/phone.component';
import { LaptopComponent } from './laptop/laptop.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    HomeComponent,
     HeaderComponent, 
     SliderComponent, 
     PhoneComponent, 
     LaptopComponent, 
     FooterComponent
    ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    HeaderComponent, 
    SliderComponent, 
    PhoneComponent, 
    LaptopComponent, 
    FooterComponent
  ]
})
export class HomeModule { }
