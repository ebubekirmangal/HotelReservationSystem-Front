import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicLayoutComponent } from '../../../layout/basic-layout/basic-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelListComponent } from '../hotel-list/hotel-list.component';
import { GetByIdHotelResponse } from '../../../features/hotel/models/getByIdResponse';
import { GetAllRoomByHotelIdResponse } from '../../../features/room/models/getAllRommByHotelId';
import { HotelService } from '../../../features/hotel/service/hotel.service';
import { RoomService } from '../../../features/room/service/room.service';
import { CardComponent } from '../../../shared/card/card.component';
import { ButtonComponent } from '../../../shared/button/button.component';
import { RoomListComponent } from '../hotel-page/room-list/room-list.component';

@Component({
  selector: 'app-hotel-detail',
  standalone: true,
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, BasicLayoutComponent, HttpClientModule, TranslateModule, FormsModule, CardComponent, RoomListComponent, ButtonComponent,HotelListComponent]
})
export class HotelDetailComponent implements OnInit {
  @Input() hotelId!: number;
  hotel!: GetByIdHotelResponse;
  rooms: GetAllRoomByHotelIdResponse[] = [];

  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelService,
    private roomService: RoomService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.hotelId = +this.route.snapshot.paramMap.get('hotelId')!;
    this.loadHotel();
    this.loadRooms();
  }

  loadHotel(): void {
    this.hotelService.getHotelById(this.hotelId).subscribe({
      next: (data: GetByIdHotelResponse) => {
        this.hotel = data;
      },
      error: (error) => {
        console.error('Otel bilgileri alınırken hata oluştu:', error);
      },
      complete: () => {
        console.log('Otel bilgileri başarıyla alındı');
      }
    });
  }
  

  loadRooms(): void {
    this.roomService.getAllRoomByHotelId(this.hotelId).subscribe({
      next: (data: GetAllRoomByHotelIdResponse[]) => {
        this.rooms = data;
      },
      error: (error) => {
        console.error('Odalar alınırken hata oluştu:', error);
      }
    });
  }

  getImageUrl(imageId: number): string {
    // Resim URL'sini oluşturma
    return `path/to/your/image/api/${imageId}`;
  }

  selectRoom(room: GetAllRoomByHotelIdResponse): void {
    this.router.navigate(['/hotel', this.hotelId, 'room', room.id]); // Oda seçme sayfasına yönlendirme
  }
}