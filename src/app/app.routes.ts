import { Routes } from '@angular/router';
import { LoginPageComponent } from './routh/login-page/login-page.component';
import { HomePageComponent } from './routh/home-page/home-page.component';
import { ManagerLoginPageComponent } from './routh/manager/login/manager-login-page.component';
import { ManagerPageComponent } from './routh/manager/basic-layout/manager-page.component';
import { MyAboutComponent } from './routh/manager/my-about/my-about/my-about.component';
import { RoomsComponent } from './routh/manager/rooms/rooms.component';
import { authGuard } from './features/user/guard/auth.guard';





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
    },
    { path: 'managerPage', component: ManagerPageComponent,canActivate: [authGuard], children: [
        { path: 'myAbout', component: MyAboutComponent },
        { path: 'rooms', component: RoomsComponent },
        // { path: 'reservations', component: ReservationsComponent },
        // { path: 'feedbacks', component: FeedbacksComponent },
        // { path: 'generalAnalysis', component: GeneralAnalysisComponent },
        { path: '', redirectTo: 'myAbout', pathMatch: 'full' }
      ]}

];
