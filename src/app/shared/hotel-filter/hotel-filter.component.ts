import { Component, EventEmitter, Inject, OnDestroy, OnInit, Output, PLATFORM_ID, Renderer2 } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-hotel-filter',
    standalone: true,
    templateUrl: './hotel-filter.component.html',
    styleUrl: './hotel-filter.component.css',
    imports: [CommonModule,
        MatDatepickerModule,
        MatInputModule,
        MatNativeDateModule,
        FormsModule,
        CalendarModule,FontAwesomeModule,
      RouterModule],
        providers:[
          {
            provide:DateAdapter,
            useFactory:adapterFactory
          }]
})
export class HotelFilterComponent implements OnInit, OnDestroy {

    checkInDate: Date;
    checkOutDate: Date;
    @Output() changeClick=new EventEmitter<boolean>();
    active:boolean=false;
    constructor(
      private renderer: Renderer2,
      @Inject(PLATFORM_ID) private platformId: Object
    ) {}
    ngOnInit(): void {
      if (isPlatformBrowser(this.platformId)) {
        this.renderer.addClass(document.body, 'hotelfilter-background');
      }
    }
  
    ngOnDestroy(): void {
      if (isPlatformBrowser(this.platformId)) {
        this.renderer.removeClass(document.body, 'hotelfilter-background');
      }
    }
    search() {
      console.log('Giriş Tarihi:', this.checkInDate);
      console.log('Çıkış Tarihi:', this.checkOutDate);
      // Burada arama işlemi yapılabilir.
    }
    isActive() {
      this.active=!this.active;
      this.changeClick.emit(this.active)
    }

}
