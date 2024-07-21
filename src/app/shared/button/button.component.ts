import { Component, EventEmitter, Input, Output } from '@angular/core';
type ButtonType = 'button' | 'submit' | 'reset';
type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'
  | 'link';
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})

export class ButtonComponent {
  @Input() type: ButtonType = 'button';
  @Input() variant: ButtonVariant = 'primary';
  @Input() className?: string;
  @Output() clickButton = new EventEmitter<MouseEvent>();

  get buttonClass(): string {
    let className = `btn btn-${this.variant}`;
    if (this.className) className += ` ${this.className}`;
    return className;
  }

  onClick(event: MouseEvent): void {
    this.clickButton.emit(event);
  }
}
