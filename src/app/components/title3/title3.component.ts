import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title3',
  templateUrl: './title3.component.html',
  styleUrls: ['./title3.component.scss'],
})
export class Title3Component {
  @Input() content: string = '';
  @Input() additional?: string;
}
