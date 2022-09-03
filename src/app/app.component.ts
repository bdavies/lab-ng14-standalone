import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf],
  template: `<h1 *ngIf="true">test</h1>`,
  styles: [],
})
export class AppComponent {
  title = 'lab-ng14-standalone';
}
