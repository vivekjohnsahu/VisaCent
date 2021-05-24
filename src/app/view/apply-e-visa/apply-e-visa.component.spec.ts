import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyEVisaComponent } from './apply-e-visa.component';

describe('ApplyEVisaComponent', () => {
  let component: ApplyEVisaComponent;
  let fixture: ComponentFixture<ApplyEVisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyEVisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyEVisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
