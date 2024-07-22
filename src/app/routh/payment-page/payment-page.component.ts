import { Component } from '@angular/core';
import { PaymentInfoComponent } from '../../shared/payment-info/payment-info.component';
import { GuestInfoComponent } from '../../shared/guest-info/guest-info.component';
import { AccommodationInfoComponent } from '../../shared/accommodation-info/accommodation-info.component';
import { PriceInfoComponent } from '../../shared/price-info/price-info.component';


  @Component({
    selector: 'app-payment-page',
    standalone: true,
    templateUrl: './payment-page.component.html',
    styleUrl: './payment-page.component.css',
    imports: [PaymentInfoComponent, GuestInfoComponent, PriceInfoComponent, AccommodationInfoComponent]
})
export class PaymentPageComponent {

}

