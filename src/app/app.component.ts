import { Component , HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showAnimatedDiv: boolean = true;
  title = 'angular-porfolio-web';

  opacity: number = 1;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    this.opacity = 1 - (scrollTop / 800); // Cambiar 100 al valor deseado
  }
}
