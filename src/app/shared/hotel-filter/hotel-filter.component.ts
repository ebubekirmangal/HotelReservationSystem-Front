import {  AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Inject, Input, OnDestroy, OnInit, Output, PLATFORM_ID, Renderer2, ViewChild } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { LocationComponent } from "../location/location.component";
import { Address } from '../../features/null/models/address';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-hotel-filter',
    standalone: true,
    templateUrl: './hotel-filter.component.html',
    styleUrl: './hotel-filter.component.css',
    providers: [
        {
            provide: DateAdapter,
            useFactory: adapterFactory
        }
    ],
    imports: [CommonModule,
        MatDatepickerModule,
        MatInputModule,
        MatNativeDateModule,
        FormsModule,
        CalendarModule, 
        FontAwesomeModule,
        RouterModule, 
        LocationComponent,
        TranslateModule
      ]
})
export class HotelFilterComponent implements AfterViewChecked {

  checkInDate: Date;
  checkOutDate: Date;
  @Output() changeClick = new EventEmitter<boolean>();
  active: boolean = false;
  panelTop: number = 0;
  panelLeft: number = 0;
  selectedLocationInfo:Address;
  @Input() locationInputValue:string;
  @ViewChild('locationButton', { static: false }) locationButton: ElementRef;

  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object,
    private elementRef: ElementRef
  ) { }

  ngAfterViewChecked() {
    // Panelin ilk konumlandırılması
    this.setPosition();
  }

  setPosition() {
    const buttonRect = this.elementRef.nativeElement.querySelector('.location button').getBoundingClientRect();
    const panel = this.elementRef.nativeElement.querySelector('.panel');

    // Sayfa yüksekliği ve genişliği
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    // Panelin yeni konumu
    const panelHeight = panel.offsetHeight;
    const panelWidth = panel.offsetWidth;

    // Örnek: Paneli butonun altına sabitlemek için
    this.panelTop = buttonRect.bottom;
    this.panelLeft = buttonRect.left;

    // Eğer panel butonun altına taşarsa sayfanın sonuna sabitlemek için kontrol edebilirsiniz
    if (this.panelTop + panelHeight > windowHeight) {
      this.panelTop = windowHeight - panelHeight;
    }

    // Diğer dinamik konumlandırma işlemleri buraya eklenebilir
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    // Sayfa yeniden boyutlandığında panelin konumunu güncelle
    this.setPosition();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    // Tıklanan element panel veya locationButton içinde değilse paneli kapat
    const clickedElement = event.target as HTMLElement;
    const panel = this.elementRef.nativeElement.querySelector('.panel');
    const isInsidePanel = panel.contains(clickedElement);
    const locationButton = this.elementRef.nativeElement.querySelector('.location');
    const isInsideLocationButton = locationButton.contains(clickedElement);

    if (!isInsidePanel && !isInsideLocationButton) {
      this.active = false;
    }
  }

  search() {
    console.log('Giriş Tarihi:', this.checkInDate);
    console.log('Çıkış Tarihi:', this.checkOutDate);
    // Burada arama işlemi yapılabilir.
  }

  isActive() {
    this.active = !this.active;
    this.changeClick.emit(this.active);
  }
  giveInfos(address:Address){
    this.selectedLocationInfo = address;
    this.locationInputValue=`${this.selectedLocationInfo.town},${this.selectedLocationInfo.city},${this.selectedLocationInfo.country}`
    console.log(this.locationInputValue)
  }

}
