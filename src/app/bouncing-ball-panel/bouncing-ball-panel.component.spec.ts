import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BouncingBallPanelComponent } from './bouncing-ball-panel.component';

describe('BouncingBallPanelComponent', () => {
  let component: BouncingBallPanelComponent;
  let fixture: ComponentFixture<BouncingBallPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BouncingBallPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BouncingBallPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
