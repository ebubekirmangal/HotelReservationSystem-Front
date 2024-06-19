import { Component } from '@angular/core';
import { BasicLayoutComponent } from "../../layout/basic-layout/basic-layout.component";
import { HotelFilterComponent } from "../../shared/hotel-filter/hotel-filter.component";
import { LocationComponent } from "../../shared/location/location.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  imports: [BasicLayoutComponent, HotelFilterComponent, LocationComponent, CommonModule]
})
<<<<<<< Updated upstream
export class HomePageComponent {
    active:boolean;
onFilterChange(active: boolean) {
        this.active = active;
=======
export class HomePageComponent implements OnInit, OnDestroy {
  active: boolean=false;
  showOverlay:boolean=false;
  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.renderer.addClass(document.body, 'homepage-background');
>>>>>>> Stashed changes
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.renderer.removeClass(document.body, 'homepage-background');
    }
  }
  onFilterChange(active: boolean) {
    this.active = active;
    this.showOverlay=true;
  }
  closeOverlay(){
    this.showOverlay=false;
  }
}