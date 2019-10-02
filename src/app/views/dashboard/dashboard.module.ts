import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CommonModule } from '@angular/common';
import { DashboardDetalleComponent } from './dashboard-detalle/dashboard-detalle.component';
import { DetalleInsumosComponent } from './detalle-insumos/detalle-insumos.component';
import { DetalleReqAuComponent } from './detalle-req-au/detalle-req-au.component';
import { ReqSinCompraComponent } from './req-sin-compra/req-sin-compra.component';
import { ComprasSinSurtirComponent } from './compras-sin-surtir/compras-sin-surtir.component';
import { AlmacenComponent } from './almacen/almacen.component';
import { ContratosDetalleComponent } from './contratos-detalle/contratos-detalle.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		DashboardRoutingModule,
		ChartsModule,
		BsDropdownModule,
		ButtonsModule.forRoot()
	],
	declarations: [DashboardComponent, DashboardDetalleComponent, DetalleInsumosComponent, DetalleReqAuComponent, ReqSinCompraComponent, ComprasSinSurtirComponent, AlmacenComponent, ContratosDetalleComponent]
})
export class DashboardModule { }
