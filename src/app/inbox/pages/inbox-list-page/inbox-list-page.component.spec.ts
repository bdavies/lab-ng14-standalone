import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxListPageComponent } from './inbox-list-page.component';

describe('InboxListPageComponent', () => {
  let component: InboxListPageComponent;
  let fixture: ComponentFixture<InboxListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ InboxListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InboxListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
