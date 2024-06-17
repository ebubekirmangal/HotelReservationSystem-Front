import { Component, EventEmitter, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Address } from '../../features/null/models/address';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [FontAwesomeModule,FormsModule,TranslateModule],
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent {
@Output() giveLocationInfos = new EventEmitter<Address>();
selectedLocationInfo: Address;
locations:Address[]=[{town:"Fethiye",city:"Muğla",country:"Türkiye"},
  {town:"Alanya",city:"Antalya",country:"Türkiye"},
  {town:"Üsküdar",city:"İstanbul",country:"Türkiye"},
  {town:"Adapazarı",city:"Sakarya",country:"Türkiye"},
  {town:"Eldivan",city:"Çankırı",country:"Türkiye"},
  {town:"Bodrum",city:"Muğla",country:"Türkiye"}
];

logLocationInfo(item: Address) {
  this.giveLocationInfos.emit(this.selectedLocationInfo);
  }


}
