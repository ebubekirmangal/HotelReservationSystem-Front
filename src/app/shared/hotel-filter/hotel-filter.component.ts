import { Component, EventEmitter, Output } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
        CalendarModule,FontAwesomeModule],
        providers:[
          {
            provide:DateAdapter,
            useFactory:adapterFactory
          }]
})
export class HotelFilterComponent {

    checkInDate: Date;
    checkOutDate: Date;
    @Output() changeClick=new EventEmitter<boolean>();
    active:boolean=false;
  
    search() {
      console.log('Giriş Tarihi:', this.checkInDate);
      console.log('Çıkış Tarihi:', this.checkOutDate);
      // Burada arama işlemi yapılabilir.
    }
    openOverlay(){
      this.changeClick.emit(true);
    }
   

}
