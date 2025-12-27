import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTwo } from './about-two';

describe('AboutTwo', () => {
  let component: AboutTwo;
  let fixture: ComponentFixture<AboutTwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutTwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutTwo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
