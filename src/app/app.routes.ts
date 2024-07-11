import { Routes } from '@angular/router';
import { LoginPageComponent } from './routh/login-page/login-page.component';
import { HomePageComponent } from './routh/home-page/home-page.component';
import { FaqListComponent } from './shared/faq-list/faq-list.component';
import { HelpSupportComponent } from './shared/help-support/help-support.component';
import { HotelListComponent } from './shared/hotel/hotel-list/hotel-list.component';
import { HotelDetailComponent } from './shared/hotel/hotel-detail/hotel-detail.component';





export const routes: Routes = [
    {

        path: '', redirectTo: '/hotels', pathMatch: 'full'
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
        path:"help-support",
        component: HelpSupportComponent
    },
    {
        path:"hotels", 
        component: HotelListComponent
    },
    {
        path:"hotel/:id",
        component: HotelDetailComponent
    }

];
