import { Component } from '@angular/core';
import { PaymentInfoComponent } from "../payment-info/payment-info.component";
import { GuestInfoComponent } from "../guest-info/guest-info.component";
import { PriceInfoComponent } from "../price-info/price-info.component";
import { AccommodationInfoComponent } from "../accommodation-info/accommodation-info.component";
@Component({
    selector: 'app-payment-page',
    standalone: true,
    templateUrl: './payment-page.component.html',
    styleUrl: './payment-page.component.css',
    imports: [PaymentInfoComponent, GuestInfoComponent, PriceInfoComponent, AccommodationInfoComponent]
})
export class PaymentPageComponent {

}
