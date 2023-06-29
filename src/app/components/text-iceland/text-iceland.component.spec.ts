import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextIcelandComponent } from './text-iceland.component';

describe('TextIcelandComponent', () => {
  let component: TextIcelandComponent;
  let fixture: ComponentFixture<TextIcelandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextIcelandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextIcelandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
