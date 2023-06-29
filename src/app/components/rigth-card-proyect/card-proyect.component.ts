import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-proyect',
  templateUrl: './card-proyect.component.html',
  styleUrls: ['./card-proyect.component.css']
})
export class CardProyectComponent {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() srcImage: string;
  @Input() link: string;

  constructor() {
    this.title = '';
    this.subtitle = '';
    this.srcImage = '';
    this.link = '';
  }
}
