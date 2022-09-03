import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      inbox-list-page works!
    </p>
  `,
  styles: [
  ]
})
export class InboxListPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
