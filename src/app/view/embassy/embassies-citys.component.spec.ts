import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbassiesCitysComponent } from './embassies-citys.component';

describe('EmbassyCitysComponent', () => {
  let component: EmbassiesCitysComponent;
  let fixture: ComponentFixture<EmbassiesCitysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmbassiesCitysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbassiesCitysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
