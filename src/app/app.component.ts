import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h1>Under Construction</h1>
    <p>This page is under construction, please check back later.</p>

    <p>
      In the mean time, swing by my <a href="https://www.linkedin.com/in/nathille333/">LinkedIn</a>
      or my <a href="https://github.com/NathanielSunday">GitHub</a> to see what I've been up to!
    </p>
  `,
  styles: ``
})
export class AppComponent {
  title = 'Portfolio';
}
