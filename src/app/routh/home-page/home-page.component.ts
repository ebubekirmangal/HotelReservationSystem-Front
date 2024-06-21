import { Component, Inject, OnDestroy, OnInit, Output, PLATFORM_ID, Renderer2 } from '@angular/core';
import { BasicLayoutComponent } from "../../layout/basic-layout/basic-layout.component";

import { LocationComponent } from "../../shared/location/location.component";
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HotelFilterComponent } from "../../shared/hotel-filter/hotel-filter.component";
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  imports: [BasicLayoutComponent, LocationComponent, CommonModule, HotelFilterComponent]
})
export class HomePageComponent implements OnInit, OnDestroy {
  active: boolean = false;
  showOverlay: boolean = false;
  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.renderer.addClass(document.body, 'homepage-background');
    }


  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.renderer.removeClass(document.body, 'homepage-background');
    }
  }
  onFilterChange(active: boolean) {
    this.active = active;
    this.showOverlay = true;
  }
  closeOverlay() {
    this.showOverlay = false;
  }

}