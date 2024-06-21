import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Address } from '../../features/null/models/address';

@Component({
  selector: 'app-location-responsive',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './location-responsive.component.html',
  styleUrl: './location-responsive.component.css'
})
export class LocationResponsiveComponent {
  @Output() close = new EventEmitter<void>();
  listAddress: Address[] = [{ town: "Fethiye", city: "Muğla", country: "Türkiye" }
    , { town: "Fethiye", city: "Muğla", country: "Türkiye" },
  { town: "Fethiye", city: "Muğla", country: "Türkiye" },
  { town: "Fethiye", city: "Muğla", country: "Türkiye" },
  { town: "Fethiye", city: "Muğla", country: "Türkiye" },
  { town: "Fethiye", city: "Muğla", country: "Türkiye" }];
  closeOverlay() {
    this.close.emit();
  }
  // listHotels(location:string){
  //   console.log(`${location} otelleri listeleniyor.`);
  //   this.closeOverlay();
  // }
}

