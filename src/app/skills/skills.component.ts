import { SkillsService } from './../services/skills.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills = [];
  dataService: SkillsService;

  constructor(private skillsService: SkillsService) {
    this.skills = skillsService.skills;
  }

  ngOnInit(): void {
    this.dataService.getSkills().subscribe(skills => this.skills = skills);
}

}


