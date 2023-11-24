import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDinamicComponent } from './input-dinamic.component';

describe('InputDinamicComponent', () => {
  let component: InputDinamicComponent;
  let fixture: ComponentFixture<InputDinamicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputDinamicComponent]
    });
    fixture = TestBed.createComponent(InputDinamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
