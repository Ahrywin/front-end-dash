import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardDetalleComponent} from './dashboard-detalle/dashboard-detalle.component';
import {DetalleInsumosComponent} from './detalle-insumos/detalle-insumos.component';
import { DashboardComponent } from './dashboard.component';
import {DetalleReqAuComponent} from './detalle-req-au/detalle-req-au.component';
import {ReqSinCompraComponent} from './req-sin-compra/req-sin-compra.component';
import {ComprasSinSurtirComponent} from './compras-sin-surtir/compras-sin-surtir.component';
import {ContratosDetalleComponent} from './contratos-detalle/contratos-detalle.component';

import { dashCaseToCamelCase } from '@angular/compiler/src/util';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: {
      title: 'Dashboard'
    },
  },
  {
    path:'detalle',
    component:DashboardDetalleComponent
   
  },
  {
    path:'detalle-insumos',
    component:DetalleInsumosComponent,
  
  },
  {
    path:'detalle-reqAut',
    component:DetalleReqAuComponent
  },
  {
    path:'ReqsnCompra',
    component:ReqSinCompraComponent
  },
  {
    path:'Compras-sin-surtir',
    component:ComprasSinSurtirComponent
  },
  {
    path:'Contratos-detalle',
    component:ContratosDetalleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
