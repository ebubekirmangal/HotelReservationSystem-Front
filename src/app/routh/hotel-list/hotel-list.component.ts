import { Component, OnInit } from '@angular/core';
import { HotelCardComponent } from "../hotel-card/hotel-card.component";
import { BasicLayoutComponent } from "../../layout/basic-layout/basic-layout.component";

@Component({
    selector: 'app-hotel-list',
    standalone: true,
    templateUrl: './hotel-list.component.html',
    styleUrl: './hotel-list.component.css',
    imports: [HotelCardComponent, BasicLayoutComponent]
})
export class HotelListComponent implements OnInit{
    hotels = [
        {
          name: 'Aleysim Alaçatı Design Als',
          location: 'Alaçatı, Çeşme, İzmir',
          features: ['Kahvaltı Dahil', 'Wi-Fi', 'Otopark', 'Havuz', 'Restoran', 'Teras'],
          price: 3568,
          imageUrl: '/assets/background/3.jpg'
        },
        {
          name: 'Levin Otel',
          location: 'Alaçatı, Çeşme, İzmir',
          features: ['Kahvaltı Dahil', 'Wi-Fi', 'Havuz', 'Resepsiyon'],
          price: 5406,
          imageUrl: '/assets/background/3.jpg'
        },
      ];
    
      constructor() { }
    
      ngOnInit(): void {
      }
}
