import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-oval-image',
  templateUrl: './oval-image.component.html',
  styleUrls: ['./oval-image.component.css']
})
export class OvalImageComponent {

  @Input() srcImage: string;
  @Input() nameImage: string;

  constructor() {
    this.srcImage = '';
    this.nameImage = '';
  }
}
