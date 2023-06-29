import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumTextComponent } from './medium-text.component';

describe('MediumTextComponent', () => {
  let component: MediumTextComponent;
  let fixture: ComponentFixture<MediumTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediumTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediumTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
