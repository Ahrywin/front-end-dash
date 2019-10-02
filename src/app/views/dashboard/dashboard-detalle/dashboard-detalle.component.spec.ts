import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDetalleComponent } from './dashboard-detalle.component';

describe('DashboardDetalleComponent', () => {
  let component: DashboardDetalleComponent;
  let fixture: ComponentFixture<DashboardDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
