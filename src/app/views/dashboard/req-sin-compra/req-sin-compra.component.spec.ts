import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqSinCompraComponent } from './req-sin-compra.component';

describe('ReqSinCompraComponent', () => {
  let component: ReqSinCompraComponent;
  let fixture: ComponentFixture<ReqSinCompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqSinCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqSinCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
