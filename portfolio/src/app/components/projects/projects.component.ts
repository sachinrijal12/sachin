import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

type Project = {
  title: string;
  desc: string;
  tech: string[];
  live: string;
  github?: string;
  image?: string;
};

@Component({
  selector: "app-projects",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"],
})
export class ProjectsComponent {
  readonly projects: Project[] = [
    {
      title: "MERN Authentication System",
      desc: "Secure authentication app with user registration, login, and protected routes built with the MERN stack.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      live: "https://mern-authentication-system-eight.vercel.app",
    },
    {
      title: "MERN CRUD App",
      desc: "Full-stack CRUD application for creating, reading, updating, and deleting data with a responsive UI.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      live: "https://mern-crud-taupe.vercel.app",
    },
  ];
}
