import { Component, Input } from '@angular/core';
import { GetAllRoomByHotelIdResponse } from '../../hotel/models/room.model';
import { RoomService } from '../../hotel/services/room.service';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { BasicLayoutComponent } from '../../../layout/basic-layout/basic-layout.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from '../../card/card.component';

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [CommonModule, TranslateModule, BasicLayoutComponent, FormsModule, HttpClientModule, CardComponent],
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.css'
})
export class RoomListComponent {
  @Input() hotelId!: number;
  rooms: GetAllRoomByHotelIdResponse[] = [];

  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
    this.roomService.getAllRoomByHotelId(this.hotelId).subscribe({
      next: (data) => this.rooms = data,
      error: (err) => console.error('Hata alındı:', err)
    });
  }
  getImageUrl(imageId: number): string {
    return `https://your-image-service-url.com/images/${imageId}`; //bunu sonra yapacağım
  }
}
