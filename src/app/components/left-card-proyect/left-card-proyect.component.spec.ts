import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftCardProyectComponent } from './left-card-proyect.component';

describe('LeftCardProyectComponent', () => {
  let component: LeftCardProyectComponent;
  let fixture: ComponentFixture<LeftCardProyectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftCardProyectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftCardProyectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
