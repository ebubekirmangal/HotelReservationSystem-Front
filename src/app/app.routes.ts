import { Routes } from '@angular/router';
import { LoginPageComponent } from './routh/login-page/login-page.component';
import { HomePageComponent } from './routh/home-page/home-page.component';
import { LocationComponent } from './shared/location/location.component';
<<<<<<< Updated upstream
=======
import { HotelFilterComponent } from './shared/hotel-filter/hotel-filter.component';
import { FaqListComponent } from './faq-list/faq-list.component';
import { SupportRequestFormComponent } from './support-request-form/support-request-form.component';
import { SupportRequestListComponent } from './support-request-list/support-request-list.component';
>>>>>>> Stashed changes



export const routes: Routes = [
    {
        path: '', redirectTo: '/home', pathMatch: 'full' 
    },
    {
        path: '', redirectTo: '/faqs', pathMatch: 'full' 
    },
    {
        path:"login",
        component: LoginPageComponent
    },
    {
        path:"home",
        component: HomePageComponent
    },
    {
        path:"faqs",
        component: FaqListComponent
    },
    {
        path:"support-request",
        component: SupportRequestFormComponent
    },
    {
        path:"support-requests",
        component: SupportRequestListComponent
    }
];
