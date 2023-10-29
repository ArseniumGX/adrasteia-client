import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() content: string = '';
  @Input() action?: () => void;
  @Input() type?: string = 'button';
  @Input() disable?: boolean = false;

  execAction() {
    if (this.action) {
      this.action();
    }
  }
}
