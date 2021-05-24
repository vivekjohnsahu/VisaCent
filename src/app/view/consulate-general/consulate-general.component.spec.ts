import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulateGeneralComponent } from './consulate-general.component';

describe('ConsulateGeneralComponent', () => {
  let component: ConsulateGeneralComponent;
  let fixture: ComponentFixture<ConsulateGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulateGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulateGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
