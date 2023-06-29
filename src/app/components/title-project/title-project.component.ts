import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-project',
  templateUrl: './title-project.component.html',
  styleUrls: ['./title-project.component.css']
})
export class TitleProjectComponent {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() link: string;

  constructor() {
    this.title = '';
    this.subtitle = '';
    this.link = '';
  }
}
