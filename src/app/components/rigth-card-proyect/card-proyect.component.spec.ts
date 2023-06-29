import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProyectComponent } from './card-proyect.component';

describe('CardProyectComponent', () => {
  let component: CardProyectComponent;
  let fixture: ComponentFixture<CardProyectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardProyectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardProyectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
