import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickLoggerComponent } from './click-logger.component';

describe('ClickLoggerComponent', () => {
  let component: ClickLoggerComponent;
  let fixture: ComponentFixture<ClickLoggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClickLoggerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickLoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
