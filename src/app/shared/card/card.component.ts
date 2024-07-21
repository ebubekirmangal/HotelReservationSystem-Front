import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ListHotelResponse } from '../hotel/models/hotel.model';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule,ButtonComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() imageSrc?: string;
  @Input() imageAlt?: string;
  @Input() title?: string;
  @Input() description?: string;
  @Input() features?: string[];
  @Output() buttonClick = new EventEmitter<void>();
   @Input() imageHeight: number = 200;
  @Input() hotel!: ListHotelResponse;

  onButtonClick(): void {
    this.buttonClick.emit();
  }
}
