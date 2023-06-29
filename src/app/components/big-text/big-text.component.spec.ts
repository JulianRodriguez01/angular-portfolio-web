import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigTextComponent } from './big-text.component';

describe('BigTextComponent', () => {
  let component: BigTextComponent;
  let fixture: ComponentFixture<BigTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
