import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.scss']
})
export class HeroPageComponent {
  scrollToBottom() {
    window.scrollTo({ top: 800, behavior: 'smooth' });
  }
}
