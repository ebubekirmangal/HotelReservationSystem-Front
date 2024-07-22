import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
  @Input() email: string;
  @Input() sentTime: string;
  @Input() title: string;
  @Input() content: string;
}
