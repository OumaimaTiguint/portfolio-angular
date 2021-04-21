import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  frontend: string[] = [
    "HTML", "CSS", "Bootstrap", "Angular", "React", "Ionic"
  ]
  backend: string[] = [
    "Node", "Express", "Nest", "MongoDB"
  ]
  other: string[] = [
    "Git", "Heroku", "Netlify", "Figma"
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
