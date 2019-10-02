import { Component, OnInit } from '@angular/core';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { RouterLink } from '@angular/router';
@Component({
	templateUrl: 'dashboard.component.html',
	styleUrls: ['dashboard.estilos.css']
})


export class DashboardComponent implements OnInit {
	
	private CurrentMonth: number = new Date().getMonth();
	ngOnInit(): void {

	}
	
	public widgets: any = [
		{
			value: [
				{ title: "Presupuesto", value: "10000" },//sin enlace
				{ title: "Insumos",value:"1000" },//con enlace
				{ title: "Diferiencia", value: "1000" },//sin enlace ac 06
				{ title: "Requisiciones por autorizar", value: "10" },//con enlace ac 08
				{ title: "Requisiciones sin   Compra", value: "20" },//con enlace 
				{ title: "Compras sin Surtir", value: "3" },
				{ title: "Almacen", value: "$15,000" },
				{ title: "Bitacora" },
				{ title: "Contratos" }
			]
			
		}
		
	];

	

	

	
}
