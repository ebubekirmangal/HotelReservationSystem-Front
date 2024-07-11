import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})

export class SearchBarComponent {
 
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  onSearch(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.search.emit(inputElement.value);
  }
}