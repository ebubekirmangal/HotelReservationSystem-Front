import { Component } from '@angular/core';

@Component({
  selector: 'app-accommodation-info',
  standalone: true,
  imports: [],
  templateUrl: './accommodation-info.component.html',
  styleUrl: './accommodation-info.component.css'
})
export class AccommodationInfoComponent {
hotelName:string="Otel İsmi";
checkInDate="04.07.2024";
checkOutDate="05.07.2024";
hotelAddress="Havra Sokagi 10/C Konak İzmir";
}