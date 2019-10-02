import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleInsumosComponent } from './detalle-insumos.component';

describe('DetalleInsumosComponent', () => {
  let component: DetalleInsumosComponent;
  let fixture: ComponentFixture<DetalleInsumosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleInsumosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleInsumosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
