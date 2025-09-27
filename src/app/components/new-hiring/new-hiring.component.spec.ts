import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHiringComponent } from './new-hiring.component';

describe('NewHiringComponent', () => {
  let component: NewHiringComponent;
  let fixture: ComponentFixture<NewHiringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewHiringComponent]
    });
    fixture = TestBed.createComponent(NewHiringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
