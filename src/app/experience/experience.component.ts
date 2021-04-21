import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experience = [
    {
      name: 'Viageur',
      img: 'assets/viageur.png',
      role: 'Frontend Developer',
      location: "Remote",
      duration: "Oct 2019 - Oct 2020",
      description: "Viageur Concierge is an AI powered travel service that creates for you personalized and curated activity itineraries",
      tasks: [
        "Contributed to the build of the application using Ionic, TypeScript, and Angular.",
        "Worked in Agile-driven environment to effectively maintain project timelines and utilize available resources.",
        "Updated layouts to meet usability and performance.",
        "Reviewed code to validate structures, assess security and verify browser, device and operating system compatibility."
      ]
    },
    {
      name: 'Upwork',
      img: "assets/upwork.png",
      role: "Freelance Fullstack Developer",
      location: "Remote",
      duration: "Nov 2020 - Present",
      description: "Upwork connects businesses of all sizes to freelancers, independent professionals, and agencies for all their hiring needs.",
      tasks: [
        "Added a reservation section to a restaurant website using React",
        "Worked on a landing page using Angular, TypeScript, and Bootstrap",
        "Designed and built an education website using Angular, TypeScript, Bootstrap, Node, Express, and Heroku."
      ]
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
