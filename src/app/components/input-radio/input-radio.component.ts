import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-radio',
  templateUrl: './input-radio.component.html',
  styleUrls: ['./input-radio.component.scss'],
})
export class InputRadioComponent {
  @Input() name: string = 'sim';
  @Input() value: string = '';
  @Input() ngModelCustom: any;
  @Input() label?: string;
  @Input() htmlFor?: string;
  @Input() action?: () => void;

  execAction() {
    if (this.action) {
      this.action();
    }
  }
}
