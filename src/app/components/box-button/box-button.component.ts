import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-box-button',
  templateUrl: './box-button.component.html',
  styleUrls: ['./box-button.component.css']
})
export class BoxButtonComponent {

  @Input() textButton: string;
  @Input() link: string;

  constructor() {
    this.textButton = '';
    this.link = '';
  }
}
