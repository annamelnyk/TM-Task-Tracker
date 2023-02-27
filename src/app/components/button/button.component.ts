import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() name!: string;
  @Input() buttonTheme?: string = 'primary';
  @Output() onClick = new EventEmitter();

  clickHandler(): void {
    console.log('clicked');
    this.onClick.emit();
  }
}
