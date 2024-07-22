import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { HelpSupportComponent } from '../help-support/help-support.component';
import { SupportRequestService } from '../../features/support-request/services/support-request.service';
import { SupportRequest } from '../../features/support-request/models/support-request.model';

@Component({
  selector: 'app-support-request-form',
  templateUrl: './support-request-form.component.html',
  styleUrls: ['./support-request-form.component.css'],
  standalone: true,
  imports: [HelpSupportComponent,TranslateModule,FormsModule],

})
export class SupportRequestFormComponent {
  supportRequest: SupportRequest = {
    userEmail: '',
    subject: '',
    description: '',
    status: false
  };

  constructor(private supportRequestService: SupportRequestService) {}

  onSubmit(): void {
    this.supportRequestService.createSupportRequest(this.supportRequest).subscribe(response => {
      console.log('Support request created:', response);
    });
  }
}