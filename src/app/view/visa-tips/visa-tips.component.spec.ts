import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaTipsComponent } from './visa-tips.component';

describe('VisaTipsComponent', () => {
  let component: VisaTipsComponent;
  let fixture: ComponentFixture<VisaTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisaTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisaTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
