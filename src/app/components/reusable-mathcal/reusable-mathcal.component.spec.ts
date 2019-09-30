import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableMathcalComponent } from './reusable-mathcal.component';

describe('ReusableMathcalComponent', () => {
  let component: ReusableMathcalComponent;
  let fixture: ComponentFixture<ReusableMathcalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReusableMathcalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusableMathcalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
