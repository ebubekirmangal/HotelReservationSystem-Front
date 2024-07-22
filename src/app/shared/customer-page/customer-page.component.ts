import { Component } from '@angular/core';
import { SideBarComponent } from "../side-bar/side-bar.component";
import { ReservationCardComponent } from "../reservation-card/reservation-card.component";
import { ProfilePageComponent } from "../profile-page/profile-page.component";
import { BasicLayoutComponent } from "../../layout/basic-layout/basic-layout.component";
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-customer-page',
    standalone: true,
    templateUrl: './customer-page.component.html',
    styleUrl: './customer-page.component.css',
    imports: [SideBarComponent, ReservationCardComponent, ProfilePageComponent, BasicLayoutComponent,TranslateModule,RouterOutlet,RouterModule]
})
export class CustomerPageComponent {

}
