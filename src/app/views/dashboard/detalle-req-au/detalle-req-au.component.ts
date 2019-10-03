import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-req-au',
  templateUrl: './detalle-req-au.component.html',
  styleUrls: ['./detalle-req-au.component.scss']
})
export class DetalleReqAuComponent implements OnInit {

  animales:Array<any> =[
    {tipo:'perro',nombre:'lisa',edad:10},
    {tipo:'gato',nombre:'tat',edad:7}
  ]
  constructor() { }

  ngOnInit() {
  }

}
