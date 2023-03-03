import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullDesignComponent } from './full-design.component';

describe('FullDesignComponent', () => {
  let component: FullDesignComponent;
  let fixture: ComponentFixture<FullDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullDesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
