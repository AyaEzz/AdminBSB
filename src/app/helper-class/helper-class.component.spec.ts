import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelperClassComponent } from './helper-class.component';

describe('HelperClassComponent', () => {
  let component: HelperClassComponent;
  let fixture: ComponentFixture<HelperClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelperClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelperClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
