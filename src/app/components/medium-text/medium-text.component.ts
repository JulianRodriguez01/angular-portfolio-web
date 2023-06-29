import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-medium-text',
  templateUrl: './medium-text.component.html',
  styleUrls: ['./medium-text.component.css']
})
export class MediumTextComponent {

  @Input() title: string;
  @Input() subtitle: string;

  constructor(){
    this.title = '';
    this.subtitle = '';
  }
}
