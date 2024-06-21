import { Component, OnInit } from '@angular/core';
import { SupportRequestService } from '../../features/supportRequest/services/support-request.service';
import { SupportRequest } from '../../features/supportRequest/models/support-request.model';
import { HelpSupportComponent } from '../help-support/help-support.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-support-request-list',
  standalone: true,
  imports: [HelpSupportComponent,FormsModule,TranslateModule,CommonModule],
  templateUrl: './support-request-list.component.html',
  styleUrl: './support-request-list.component.css'
})
export class SupportRequestListComponent implements OnInit{
supportRequests:SupportRequest[]=[{userEmail:'1234@gmail.com',subject:'konu',status:false,description:'açıklama'}];

constructor(private supportRequestService:SupportRequestService){}
  ngOnInit(): void {
    const userEmail='user@example.com';
    this.supportRequestService.getUserSupportRequests(userEmail).subscribe(()=>{
      this.supportRequests=this.supportRequests;
    })
  }
}