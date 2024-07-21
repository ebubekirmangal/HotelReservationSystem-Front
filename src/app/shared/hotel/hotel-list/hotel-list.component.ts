import { Component, Input, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { BasicLayoutComponent } from '../../../layout/basic-layout/basic-layout.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HotelService } from '../services/hotel.service';

import { Router } from '@angular/router';
import { CardComponent } from '../../card/card.component';
import { ListHotelResponse } from '../models/hotel.model';
import { SearchBarComponent } from '../../search-bar/search-bar.component';
import { StarPipe } from './pipe/star.pipe';
import { ButtonComponent } from '../../button/button.component';



@Component({
    selector: 'app-hotel-list',
    standalone: true,
    templateUrl: './hotel-list.component.html',
    styleUrls: ['./hotel-list.component.css'],
    imports: [CommonModule, TranslateModule, BasicLayoutComponent, FormsModule, HttpClientModule,CardComponent,SearchBarComponent,StarPipe,ButtonComponent]
})
export class HotelListComponent implements OnInit {
  hotels: ListHotelResponse[] = [];
  filteredHotels: ListHotelResponse[] = [];
  searchText: string = '';
  errorMessage: string | null = null;
  @Input() hotelId!: number;

  constructor(
    private hotelService: HotelService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.hotelService.getAllHotels().subscribe({
      next: (data: ListHotelResponse[]) => {
        this.hotels = data;
        this.filteredHotels = data; // Initialize the filtered list
        console.log(this.filteredHotels); // Verileri konsola yazdır
      },
      error: (error) => {
        this.errorMessage = 'Otelleri getirirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.';
        console.error('Error fetching hotels:', error);
      }
    });
  }

  selectRoom(hotel: ListHotelResponse): void {
    this.router.navigate(['/hotel', hotel.id]);
  }

  onSearch(searchText: string): void {
    this.filteredHotels = this.hotels.filter(hotel =>
      hotel.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }

 
}