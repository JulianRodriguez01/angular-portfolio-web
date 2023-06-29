import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-text',
  templateUrl: './big-text.component.html',
  styleUrls: ['./big-text.component.css']
})
export class BigTextComponent {

  @Input() smallText: string;
  @Input() text: string;

  constructor() {
    this.smallText = '';
    this.text = '';
  }
}
