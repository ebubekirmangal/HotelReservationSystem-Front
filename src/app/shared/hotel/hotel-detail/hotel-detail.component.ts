import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BasicLayoutComponent } from '../../../layout/basic-layout/basic-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { HotelListComponent } from "../hotel-list/hotel-list.component";
import { Hotel, Room } from '../models/hotel.model';
import { ActivatedRoute } from '@angular/router';
import { HotelService } from '../services/hotel.service';



@Component({
    selector: 'app-hotel-detail',
    standalone: true,
    templateUrl: './hotel-detail.component.html',
    styleUrls: ['./hotel-detail.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, BasicLayoutComponent, HttpClientModule, TranslateModule, FormsModule, HotelListComponent]
})
export class HotelDetailComponent implements OnInit {
  hotel: Hotel | undefined;

  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getHotelDetail(id);
  }

  getHotelDetail(id: number): void {
    this.hotelService.getHotelById(id).subscribe({
      next: (data) => {
        this.hotel = data;
      },
      error: (error) => {
        console.error('Error fetching hotel detail:', error);
      }
    });
  }

  selectRoom(room: Room): void {
    // Navigate to booking or room detail page with the selected room information
    console.log('Selected room:', room);
  }
}