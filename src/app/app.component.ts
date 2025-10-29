import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgOptimizedImage} from '@angular/common';

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
        Hi there! My name is Nathaniel Sunday, but I usually go by Nathan, or by PoctorDepper online. I am a
        first-generation college student from a rocky household, currently majoring in Computer and Electrical
        Engineering with minors in Computer Science and Mathematics. I’m rather interested in microprocessors, embedded
        systems, and general purpose robotics. In my free time, I tend to work on my ever-growing project backlog and
        teach high school students how to design, wire, and program robots.
      </p>
    </section>
    <section>
      <h2>Projects</h2>
      <p>I'm working on getting a curated list here. In the mean time, visit my GitHub in my links at the bottom!</p>
    </section>
    <section>
      <h2>Skills</h2>
      <div class="skills">
        <div>C/C++</div>
        <div>C#</div>
        <div>HDL</div>
        <div>CAD</div>
        <div>Java</div>
        <div>Python</div>
        <div>SQL</div>
        <div>LaTeX</div>
        <div>Linux systems</div>
        <div>Microsoft Office suite</div>
        <div>Communication</div>
        <div>Leadership</div>
      </div>
    </section>
    <div class="footer">
      <a href="https://www.github.com/PoctorDepper"><i class="fa fa-github"></i> Github</a>
      <a href="https://www.linkedin.com/in/nathille333/"><i class="fa fa-linkedin"></i> LinkedIn</a>
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
  `
})
export class AppComponent {
  title = 'Portfolio';
}
