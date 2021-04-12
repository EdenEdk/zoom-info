import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupContentContainerComponent } from './popup-content-container.component';

describe('PopupContentContainerComponent', () => {
  let component: PopupContentContainerComponent;
  let fixture: ComponentFixture<PopupContentContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupContentContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupContentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
