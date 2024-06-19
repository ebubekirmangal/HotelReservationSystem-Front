import { Component } from '@angular/core';
import { SupportRequest } from '../features/supportRequest/models/support-request.model';
import { SupportRequestService } from '../features/supportRequest/services/support-request.service';

@Component({
  selector: 'app-support-request-form',
  standalone: true,
  imports: [],
  templateUrl: './support-request-form.component.html',
  styleUrl: './support-request-form.component.css'
})
export class SupportRequestFormComponent {
supportRequest:SupportRequest={
  id:null,
  userEmail:'',
  subject:'',
  description:'',
  status:''
};

constructor(private supportRequestService:SupportRequestService){}

onSubmit():void{
  this.supportRequestService.createSupportRequest(this.supportRequest).subscribe();
}
}
