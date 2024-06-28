import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-time-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './time-display.component.html',
  styleUrl: './time-display.component.css'
})
export class TimeDisplayComponent {
  @Input() isSubmit: boolean = false;
  @Input() message: string;
  @Input() color: string;
}
