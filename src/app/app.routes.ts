import { Routes } from '@angular/router';
import { LoginPageComponent } from './routh/login-page/login-page.component';
import { HomePageComponent } from './routh/home-page/home-page.component';
import { ManagerLoginPageComponent } from './routh/manager/login/manager-login-page.component';
import { ManagerPageComponent } from './routh/manager/basic-layout/manager-page.component';
import { MyAboutComponent } from './routh/manager/my-about/my-about/my-about.component';
import { RoomsComponent } from './routh/manager/rooms/rooms.component';
import { ListFeedbackComponent } from './routh/customer/list-feedback/list-feedback.component';
import { FeedbackFormComponent } from './routh/customer/feedback-form/feedback-form.component';
import { FeedbackReplyComponent } from './routh/manager/feedback-reply/feedback-reply.component';
import { HotelListComponent } from './routh/hotel-list-page/hotel-list/hotel-list.component';
import { HotelDetailComponent } from './routh/hotel-list-page/hotel-detail/hotel-detail.component';
import { PaymentPageComponent } from './routh/payment-page/payment-page.component';
import { ProfilePageComponent } from './routh/profile-page/profile-page.component';
import { MyAccountPageComponent } from './routh/customer/my-account/my-account.component';
import { ReservationCardComponent } from './routh/customer/reservations/reservations.component';


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
    { path: 'manager-panel', component: ManagerPageComponent, children: [//,canActivate:[managerGuard] şimdilik çıkardım işlemlere devam etmek için
        { path: 'my-about', component: MyAboutComponent },
        { path: 'rooms', component: RoomsComponent },
        // { path: 'reservations', component: ReservationsComponent },
        { path: 'feedback-reply', component: FeedbackReplyComponent },
        // { path: 'generalAnalysis', component: GeneralAnalysisComponent },
        { path: '', redirectTo: 'my-about', pathMatch: 'full' }
      ]},
      {
          path:"list-feedback",
          component: ListFeedbackComponent
      },
      {
          path:"add-feedback",
          component: FeedbackFormComponent
      },
      {
        path:"hotels", 
        component: HotelListComponent
      },
      {
        path:"hotel/:id",
        component: HotelDetailComponent
      },
      {
        path:"payment-page",
        component: PaymentPageComponent
    },
    {
        path:"profile-page",
        component: ProfilePageComponent,
        children: [
            { path: 'my-account', component: MyAccountPageComponent },
            { path: 'reservations', component: ReservationCardComponent },
        ] 
    }
      

];
