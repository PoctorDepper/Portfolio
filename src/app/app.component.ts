import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';
import {Project} from './model/project.model';

@Component({
  selector: 'app-root',
  imports: [NgOptimizedImage],
  template: `
    <div class="headline">
      <img ngSrc="./selfie.jpg" alt="a photo of Nathan Sunday" width="170" height="170" class="selfie"/>
      <div>
        <h1>Nathan Sunday</h1>
        <p class="tagline">
          Computer and Electrical Engineering Major
          <br>
          Embedded Systems Enjoyer
        </p>
      </div>
    </div>
    <hr>
    <section>
      <h2>About Me</h2>
      <p>
        Hi there! My name is Nathaniel Sunday, but I usually go by Nathan, or by PoctorDepper online. I live with my
        wife and two adorable, yet incredibly spoiled cats named Jinx and Luna. I am a first-generation college student
        with a rockier childhood than most, currently majoring in Computer and Electrical Engineering with minors in
        Computer Science and Mathematics. I’m rather interested in microprocessors, embedded systems, and general
        purpose robotics. In my free time, I tend to work on my ever-growing project backlog and teach high school
        students how to design, wire, and program robots every year since 2020.
      </p>
    </section>
    <section>
      <h2>Projects</h2>
      <div class="projects">
        @for (project of projects; track project) {
          <img ngSrc="./{{project.image}}" alt="{{project.name}}" (click)="displayProject = project" width="100"
               height="100">
        }
      </div>
      @if (displayProject != undefined) {
        <div class="project-viewer" animate.enter="enter-animation">
          <img ngSrc="./{{displayProject.image}}" alt="{{displayProject.name}}" width="300" height="300">
        </div>
      }
    </section>
    <section>
      <h2>Skills</h2>
      <div class="skills">
        @for (skill of skills; track skill) {
          <div>{{ skill }}</div>
        }
      </div>
    </section>
    <div class="footer">
      <a href="https://www.github.com/PoctorDepper"><i class="fa fa-github"></i> Github</a>
      <a href="https://www.linkedin.com/in/nathille333/"><i class="fa fa-linkedin"></i> LinkedIn</a>
      <a href="mailto:nathanielsunday756@gmail.com"><i class="fa fa-envelope"></i> Email</a>
    </div>
  `,
  styles: `
    h1 {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
    }

    h2 {
      font-size: 1.5rem;
      margin-top: 2.5rem;
      margin-bottom: 1rem;
    }

    p {
      text-align: justify;
    }

    a {
      text-decoration: none;
      color: mediumpurple;
    }

    a:hover {
      font-weight: bold;
      text-shadow: .05rem .05rem #999;
    }

    .footer {
      margin: 0 auto;
      padding: 1rem;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      background-color: white;
      position: sticky;
      bottom: 0;
    }

    .footer a {
      font-size: 1.5rem;
      color: #252525;
    }

    .headline {
      display: flex;
      align-items: center;
      gap: 3rem;
      margin-bottom: 3rem;
    }

    .selfie {
      object-fit: cover;
      /*From left-bottom quadrant*/
      object-position: 0 75%;
      border-radius: 50%;
      border: 4px outset purple;
    }

    .tagline {
      font-size: 1.25rem;
      color: #666;
    }

    .projects {

    }

    .projects img {

    }

    .projects-viewer {
    }

    .enter-animation {
      animation: slide-fade 1s;
    }
    @keyframes slide-fade {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .skills {
      display: flex;
      /*padding: 0 2rem;*/
      flex-flow: row wrap;
      justify-content: center;
      gap: 1rem 2rem;
    }

    .skills div {
      text-align: center;
      font-weight: bold;
      padding: 0 0.5rem;
      margin: 0;
      border-radius: 0.25rem;
      border: 0.125rem solid #252525;
    }

    .skills div:hover {
      color: white;
      background-color: #252525;
      /*border: .25rem groove #252525;*/
    }
  `
})
export class AppComponent {
  title = 'Portfolio';
  skills = ["C/C++", "C#", "HDL", "CAD", "Java", "Python", "SQL", "LaTeX", "Linux systems", "Microsoft Office suite", "Communication", "Leadership"];
  projects:Project[] = [{name:"self", image:"selfie.jpg", description:""}];
  displayProject:Project|undefined;
}
