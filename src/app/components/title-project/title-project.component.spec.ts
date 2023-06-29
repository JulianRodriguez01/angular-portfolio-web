import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleProjectComponent } from './title-project.component';

describe('TitleProjectComponent', () => {
  let component: TitleProjectComponent;
  let fixture: ComponentFixture<TitleProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
