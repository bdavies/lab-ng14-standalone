import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiplyByTwoPipe } from '@app/shared/pipes/multiply-by-two/multiply-by-two.pipe';

@Component({
  standalone: true,
  imports: [CommonModule, MultiplyByTwoPipe],
  template: `
    <p>inbox-list-page works!</p>

    <p>Pipe checker: {{ 10 | multiplyByTwo }}</p>
  `,
  styles: [],
})
export class InboxListPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
