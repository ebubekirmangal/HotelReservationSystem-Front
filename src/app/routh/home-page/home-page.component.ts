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
    imports: [BasicLayoutComponent, HotelFilterComponent, LocationComponent,CommonModule]
})
export class HomePageComponent {
    active:boolean;
onFilterChange(active: boolean) {
        this.active = active;
    }
}