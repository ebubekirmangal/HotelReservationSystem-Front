import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { HelpSupportComponent } from '../help-support/help-support.component';
import { SupportRequest } from '../../features/support-request/models/support-request.model';
import { SupportRequestService } from '../../features/support-request/services/support-request.service';

@Component({
  selector: 'app-support-request-list',
  standalone: true,
  imports: [HelpSupportComponent,FormsModule,TranslateModule,CommonModule],
  templateUrl: './support-request-list.component.html',
  styleUrl: './support-request-list.component.css'
})
//veritabanından gelecek
//sayfa height'ı ayarlanacak
export class SupportRequestListComponent implements OnInit{
supportRequests:SupportRequest[]=[{userEmail:'1234@gmail.com',subject:'konu',status:false,description:'açıklama'},
  {userEmail:'1234@gmail.com',subject:'konu',status:false,description:'açıklama'},
  {userEmail:'1234@gmail.com',subject:'konu',status:false,description:'açıklama'}];

constructor(private supportRequestService:SupportRequestService){}
  ngOnInit(): void {
    const userEmail='user@example.com';
    this.supportRequestService.getUserSupportRequests(userEmail).subscribe(()=>{
      this.supportRequests=this.supportRequests;
    })
  }
}