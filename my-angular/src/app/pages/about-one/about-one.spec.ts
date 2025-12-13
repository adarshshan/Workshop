import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutOne } from './about-one';

describe('AboutOne', () => {
  let component: AboutOne;
  let fixture: ComponentFixture<AboutOne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutOne]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutOne);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
