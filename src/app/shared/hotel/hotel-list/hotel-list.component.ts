import { Component, EventEmitter, Inject, OnDestroy, OnInit, Output, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Renderer2 } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { BasicLayoutComponent } from '../../../layout/basic-layout/basic-layout.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Hotel } from '../models/hotel.model';
import { HotelService } from '../services/hotel.service';

import { HotelDetailCardComponent } from "../hotel-detail-card/hotel-detail-card.component";
import { Router } from '@angular/router';


@Component({
    selector: 'app-hotel-list',
    standalone: true,
    templateUrl: './hotel-list.component.html',
    styleUrls: ['./hotel-list.component.css'],
    imports: [CommonModule, TranslateModule, BasicLayoutComponent, FormsModule, HttpClientModule, HotelDetailCardComponent]
})
export class HotelListComponent implements OnInit {
  hotels: Hotel[] = [];
  filteredHotels: Hotel[] = [];
  searchTerm: string = '';

  constructor(
    private renderer: Renderer2,
    private hotelService: HotelService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.renderer.addClass(document.body, 'hotel-list-background');
    }
    this.hotelService.Hotel().subscribe(data => {
      this.hotels = data;
      this.filteredHotels = data;
    });

    if (isPlatformBrowser(this.platformId)) {
      this.startImageSlider();
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.renderer.removeClass(document.body, 'hotel-list-background');
    }
  }

  selectRoom(hotel: Hotel): void {
    this.router.navigate(['/hotel', hotel.id]);
  }

  startImageSlider(): void {
    setInterval(() => {
      const sliders = document.querySelectorAll('.image-slider');
      sliders.forEach(slider => {
        const images = slider.querySelectorAll('img');
        let currentIndex = Array.from(images).findIndex(img => img.classList.contains('active'));
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
      });
    }, 3000);
  }

  searchHotels(): void {
    this.filteredHotels = this.hotels.filter(hotel =>
      hotel.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  getStarCount(rating: number): number[] {
    return Array(rating).fill(0);
  }
}