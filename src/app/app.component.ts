import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BasicLayoutComponent } from './layout/basic-layout/basic-layout.component';
import { HotelListComponent } from "./shared/hotel/hotel-list/hotel-list.component";
import { HotelDetailComponent } from "./shared/hotel/hotel-detail/hotel-detail.component";



@Component({
    selector: 'app-root',
    standalone: true, //http ve basic layout'u sonradan ekledim
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HttpClientModule, BasicLayoutComponent, HotelListComponent, HotelDetailComponent]
})
export class AppComponent{
  title = 'Looking for Hotel';
  
}
 

