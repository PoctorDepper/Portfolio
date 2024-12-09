import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h1>Under Construction</h1>
    <p>This page is under construction, please check back later.</p>
  `,
  styles: ``
})
export class AppComponent {
  title = 'Portfolio';
}
