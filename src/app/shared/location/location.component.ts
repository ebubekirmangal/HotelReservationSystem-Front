import { Component, EventEmitter, Output } from '@angular/core';
import { Address } from '../../features/null/models/address';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-location',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent {
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
