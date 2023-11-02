import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassCardsComponent } from './class-cards.component';

describe('ClassCardsComponent', () => {
  let component: ClassCardsComponent;
  let fixture: ComponentFixture<ClassCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassCardsComponent]
    });
    fixture = TestBed.createComponent(ClassCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
