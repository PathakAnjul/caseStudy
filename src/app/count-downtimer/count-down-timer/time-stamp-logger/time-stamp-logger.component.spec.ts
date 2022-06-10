import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeStampLoggerComponent } from './time-stamp-logger.component';

describe('TimeStampLoggerComponent', () => {
  let component: TimeStampLoggerComponent;
  let fixture: ComponentFixture<TimeStampLoggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeStampLoggerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeStampLoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
