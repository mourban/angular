import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDetalleComponent } from './component-detalle.component';

describe('ComponentDetalleComponent', () => {
  let component: ComponentDetalleComponent;
  let fixture: ComponentFixture<ComponentDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
