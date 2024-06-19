import { Component, OnInit } from '@angular/core';
import { SupportRequest } from '../features/supportRequest/models/support-request.model';
import { SupportRequestService } from '../features/supportRequest/services/support-request.service';

@Component({
  selector: 'app-support-request-list',
  standalone: true,
  imports: [],
  templateUrl: './support-request-list.component.html',
  styleUrl: './support-request-list.component.css'
})
export class SupportRequestListComponent implements OnInit{
supportRequests:SupportRequest[];

constructor(private supportRequestService:SupportRequestService){}
  ngOnInit(): void {
    const userEmail='user@example.com';
    this.supportRequestService.getUserSupportRequests(userEmail).subscribe(()=>{
      this.supportRequests=this.supportRequests;
    })
  }
}
