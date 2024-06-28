import { Routes } from '@angular/router';
import { LoginPageComponent } from './routh/login-page/login-page.component';
import { HomePageComponent } from './routh/home-page/home-page.component';
import { ManagerLoginPageComponent } from './routh/manager-login-page/manager-login-page/manager-login-page.component';





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
        path:"manager-login",
        component: ManagerLoginPageComponent
    }

];
