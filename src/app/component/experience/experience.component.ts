import { Component } from '@angular/core';
import { SkillItem, dummySkillsData } from './data';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  dummySkillsData: SkillItem[] = dummySkillsData;
}
