import { Component } from '@angular/core';
import { SupportRequestService } from '../../features/supportRequest/services/support-request.service';
import { SupportRequest } from '../../features/supportRequest/models/support-request.model';
import { TranslateModule } from '@ngx-translate/core';
import { HelpSupportComponent } from '../help-support/help-support.component';
import { FormsModule } from '@angular/forms';






@Component({
  selector: 'app-support-request-form',
  templateUrl: './support-request-form.component.html',
  styleUrls: ['./support-request-form.component.css'],
  standalone: true,
  imports: [HelpSupportComponent,TranslateModule,FormsModule],

})
export class SupportRequestFormComponent {
  supportRequest: SupportRequest = {
    id: null,
    userEmail: '',
    subject: '',
    description: '',
    status: ''
  };

  constructor(private supportRequestService: SupportRequestService) {}

  onSubmit(): void {
    this.supportRequestService.createSupportRequest(this.supportRequest).subscribe(response => {
      console.log('Support request created:', response);
    });
  }
}