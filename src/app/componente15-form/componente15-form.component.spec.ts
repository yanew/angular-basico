import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente15FormComponent } from './componente15-form.component';

describe('Componente15FormComponent', () => {
  let component: Componente15FormComponent;
  let fixture: ComponentFixture<Componente15FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente15FormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente15FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
