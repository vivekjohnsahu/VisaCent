import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaStatusComponent } from './visa-status.component';

describe('VisaStatusComponent', () => {
  let component: VisaStatusComponent;
  let fixture: ComponentFixture<VisaStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisaStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisaStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
