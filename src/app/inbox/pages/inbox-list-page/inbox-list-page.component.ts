import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiplyByTwoPipe } from '@app/shared/pipes/multiply-by-two/multiply-by-two.pipe';
import { MatInputModule } from '@angular/material/input';

@Component({
  standalone: true,
  imports: [CommonModule, MultiplyByTwoPipe, MatInputModule],
  template: `
    <p>inbox-list-page works!</p>

    <mat-form-field appearance="fill">
      <mat-label>Sample input</mat-label>
      <input matInput type="text" />
    </mat-form-field>

    <p>Pipe checker: {{ 10 | multiplyByTwo }}</p>
  `,
  styles: [],
})
export class InboxListPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
