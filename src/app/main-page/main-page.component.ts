import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  @ViewChild('hero', { static: false }) hero: ElementRef | undefined;

  scrollToTop($loading: any) {
    $loading.scrollIntoView({ top: 0, behavior: 'smooth' });
  }
}
