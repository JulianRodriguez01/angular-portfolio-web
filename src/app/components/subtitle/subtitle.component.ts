import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-subtitle',
  templateUrl: './subtitle.component.html',
  styleUrls: ['./subtitle.component.css']
})
export class SubtitleComponent {

  @Input() text : string;
  @Input() lowText : string;
  @Input() link : string;
  @Input() linkText : string;

  constructor(){
    this.text = '';
    this.lowText = '';
    this.link = '';
    this.linkText = '';
  }
}
