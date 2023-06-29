import { Component, Input, HostListener, OnInit  } from '@angular/core';

@Component({
  selector: 'app-left-card-proyect',
  templateUrl: './left-card-proyect.component.html',
  styleUrls: ['./left-card-proyect.component.css']
})
export class LeftCardProyectComponent {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() srcImage: string;
  @Input() link: string;
  mostrarDiv = false;

  constructor() {
    this.title = '';
    this.subtitle = '';
    this.srcImage = '';
    this.link = '';
  }

  ngOnInit() {
    this.verificarVisibilidad();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.verificarVisibilidad();
  }

  verificarVisibilidad() {
    const divElement = document.getElementById('miDiv');
    if (divElement) {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const windowHeight = window.innerHeight;
      const divPosition = divElement.offsetTop;

      if (scrollTop + windowHeight >= divPosition && !this.mostrarDiv) {
        this.mostrarDiv = true;
      }
    }
  }
}
