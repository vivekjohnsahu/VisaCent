import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbassiesCountryComponent } from './embassies-country.component';

describe('EmbassiesCountryComponent', () => {
  let component: EmbassiesCountryComponent;
  let fixture: ComponentFixture<EmbassiesCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmbassiesCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbassiesCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
