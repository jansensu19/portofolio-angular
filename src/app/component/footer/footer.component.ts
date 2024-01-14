import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Output() scrollToSection = new EventEmitter<any>();

  scrollToComponent(place:string){
    this.scrollToSection.emit(place)
  }
}
