import { Component } from '@angular/core';
import { ReservationCardComponent } from '../customer/reservations/reservations.component';
import { MyAccountPageComponent } from '../customer/my-account/my-account.component';
import { RouterModule } from '@angular/router';
import { SideBarComponent } from '../../shared/side-bar/side-bar.component';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [SideBarComponent,ReservationCardComponent,MyAccountPageComponent,RouterModule],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent {
logout(){
  localStorage.removeItem('token');
}
}