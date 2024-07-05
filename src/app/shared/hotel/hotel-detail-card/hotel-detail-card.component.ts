import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-detail-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hotel-detail-card.component.html',
  styleUrls: ['./hotel-detail-card.component.css']
})
export class HotelDetailCardComponent implements OnInit {
ngOnInit(): void {
  throw new Error('Method not implemented.');
}

}

