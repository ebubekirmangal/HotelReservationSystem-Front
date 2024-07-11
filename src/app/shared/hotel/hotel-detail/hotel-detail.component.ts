import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicLayoutComponent } from '../../../layout/basic-layout/basic-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';


import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from '../services/hotel.service';
import { CardComponent } from '../../card/card.component';
import { GetByIdHotelResponse} from '../models/get-by-id-hotel-response.model';
import { RoomService } from '../services/room.service';
import { GetAllRoomByHotelIdResponse } from '../models/room.model';
import { RoomListComponent } from "../../room/room-list/room-list.component";

@Component({
  selector: 'app-hotel-detail',
  standalone: true,
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,

  imports: [CommonModule, BasicLayoutComponent, HttpClientModule, TranslateModule, FormsModule, CardComponent, RoomListComponent]
})
export class HotelDetailComponent implements OnInit {

  @Input() hotelId!: number;
  hotel!: GetByIdHotelResponse;
 

  

  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelService,
    
    private router: Router
  ) {}

  ngOnInit(): void {
    this.hotelId = +this.route.snapshot.paramMap.get('hotelId')!;
    this.hotelService.getHotelById(this.hotelId).subscribe(
      (data: GetByIdHotelResponse) => {
        this.hotel = data;
      },
      (error) => {
        console.error('Error fetching hotel details:', error);
      }
    );
  }

  loadHotel(): void {
    this.hotelService.getHotelById(this.hotelId).subscribe(
      (data: GetByIdHotelResponse) => {
        this.hotel = data;
      },
      (error) => {
        console.error('Error fetching hotel:', error);
      }
    );
  }



  selectRoom(roomId: number): void {
    this.router.navigate(['/hotel', this.hotelId, 'room', roomId]); // Oda seçme sayfasına yönlendirme
  }
}
