import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testpage } from './testpage';

describe('Testpage', () => {
  let component: Testpage;
  let fixture: ComponentFixture<Testpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Testpage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
