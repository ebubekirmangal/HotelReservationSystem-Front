import { Routes } from '@angular/router';
import { LoginPageComponent } from './routh/login-page/login-page.component';
import { HomePageComponent } from './routh/home-page/home-page.component';
import { LocationComponent } from './shared/location/location.component';



export const routes: Routes = [
    {
        path: '', redirectTo: '/home', pathMatch: 'full' 
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
        path:"location",
        component: HomePageComponent
    }

];
