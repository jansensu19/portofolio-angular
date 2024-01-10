import { Component } from '@angular/core';
import { PortfolioData, dummyPortfolioData } from './data';

@Component({
  selector: 'app-portofolio',
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.scss']
})
export class PortofolioComponent {
  dummyPortfolioData: PortfolioData[] = dummyPortfolioData;
}
