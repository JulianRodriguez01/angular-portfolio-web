import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-circle-image',
  templateUrl: './circle-image.component.html',
  styleUrls: ['./circle-image.component.css']
})
export class CircleImageComponent {

  @Input() srcImage: string;
  @Input() nameImage: string;

  constructor() {
    this.srcImage = '';
    this.nameImage = '';
  }
}
