import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CallpagePage } from './callpage.page';

describe('CallpagePage', () => {
  let component: CallpagePage;
  let fixture: ComponentFixture<CallpagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CallpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
