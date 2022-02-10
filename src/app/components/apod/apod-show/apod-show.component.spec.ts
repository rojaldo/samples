import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApodShowComponent } from './apod-show.component';

describe('ApodShowComponent', () => {
  let component: ApodShowComponent;
  let fixture: ComponentFixture<ApodShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApodShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApodShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
