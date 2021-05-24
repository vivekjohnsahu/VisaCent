import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulateInComponent } from './consulate-in.component';

describe('ConsulateInComponent', () => {
  let component: ConsulateInComponent;
  let fixture: ComponentFixture<ConsulateInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulateInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulateInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
