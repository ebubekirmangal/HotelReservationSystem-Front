import { Routes } from '@angular/router';
import { LoginPageComponent } from './routh/login-page/login-page.component';
import { HomePageComponent } from './routh/home-page/home-page.component';
import { FaqListComponent } from './shared/faq-list/faq-list.component';
import { HelpSupportComponent } from './shared/help-support/help-support.component';





export const routes: Routes = [
    {
        path: '', redirectTo: '/help-support', pathMatch: 'full' 
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
    }


];
