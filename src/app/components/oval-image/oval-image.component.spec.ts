import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OvalImageComponent } from './oval-image.component';

describe('OvalImageComponent', () => {
  let component: OvalImageComponent;
  let fixture: ComponentFixture<OvalImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OvalImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OvalImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
