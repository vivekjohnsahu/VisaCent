import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbassiesDetailsComponent } from './embassies-details.component';

describe('EmbassiesDetailsComponent', () => {
  let component: EmbassiesDetailsComponent;
  let fixture: ComponentFixture<EmbassiesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmbassiesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbassiesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
