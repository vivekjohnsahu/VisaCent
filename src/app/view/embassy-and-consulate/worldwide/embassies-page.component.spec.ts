import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbassiesPageComponent } from './embassies-page.component';

describe('EmbassiesPageComponent', () => {
  let component: EmbassiesPageComponent;
  let fixture: ComponentFixture<EmbassiesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmbassiesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbassiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
