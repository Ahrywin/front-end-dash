import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasSinSurtirComponent } from './compras-sin-surtir.component';

describe('ComprasSinSurtirComponent', () => {
  let component: ComprasSinSurtirComponent;
  let fixture: ComponentFixture<ComprasSinSurtirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprasSinSurtirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprasSinSurtirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
