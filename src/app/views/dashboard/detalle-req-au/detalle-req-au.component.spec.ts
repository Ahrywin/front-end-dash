import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleReqAuComponent } from './detalle-req-au.component';

describe('DetalleReqAuComponent', () => {
  let component: DetalleReqAuComponent;
  let fixture: ComponentFixture<DetalleReqAuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleReqAuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleReqAuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
