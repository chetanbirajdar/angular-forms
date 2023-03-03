import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankDesignComponent } from './blank-design.component';

describe('BlankDesignComponent', () => {
  let component: BlankDesignComponent;
  let fixture: ComponentFixture<BlankDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlankDesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlankDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
