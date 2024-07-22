import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from '../../../../shared/card/card.component';
import { GetAllRoomByHotelIdResponse } from '../../../../features/room/models/getAllRommByHotelId';
import { RoomService } from '../../../../features/room/service/room.service';


@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [
    CommonModule, 
    TranslateModule, 
    FormsModule, 
    HttpClientModule, 
    CardComponent
  ],
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css'] // Düzeltme: styleUrls
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
    return `https://your-image-service-url.com/images/${imageId}`; // Bu kısmı daha sonra tamamlayacaksınız
  }
}