import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

type SkillCategory = {
  title: string;
  skills: string[];
};

@Component({
  selector: "app-skills",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.css"],
})
export class SkillsComponent {
  readonly skillsData: SkillCategory[] = [
    {
      title: "MERN Stack",
      skills: ["MongoDB", "Express.js", "React", "Node.js"],
    },
    {
      title: "Version Control",
      skills: ["Git", "GitHub"],
    },
    {
      title: "DevOps / Tools",
      skills: ["Docker", "Deployment"],
    },
    {
      title: "System",
      skills: ["Linux"],
    },
  ];
}
