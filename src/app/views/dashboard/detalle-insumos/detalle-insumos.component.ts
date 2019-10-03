import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-insumos',
  templateUrl: './detalle-insumos.component.html',
  styleUrls: ['./detalle-insumos.component.scss']
})
export class DetalleInsumosComponent implements OnInit {



  expIns: Array<any>=[
    {clave:'INV_INI_064', desc:'PIJA 8" X 2"',unidad:'PZA',estim:0.00,util:0.00,rest:0.00},
    {clave:'INV_INI_064', desc:'PIJA 8" X 2"',unidad:'PZA',estim:0.00,util:0.00,rest:0.00},
    {clave:'INV_INI_064', desc:'PIJA 8" X 2"',unidad:'PZA',estim:0.00,util:0.00,rest:0.00},
    {clave:'INV_INI_064', desc:'PIJA 8" X 2"',unidad:'PZA',estim:0.00,util:0.00,rest:0.00}
  ]
  constructor() { }

  ngOnInit() {
  }

}
