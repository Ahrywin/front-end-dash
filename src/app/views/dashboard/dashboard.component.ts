import { Component, OnInit } from '@angular/core';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { RouterLink } from '@angular/router';
import { TestserviceService } from '../../servicios/testservice.service';
@Component({
	templateUrl: 'dashboard.component.html',
	styleUrls: ['dashboard.estilos.css']
})


export class DashboardComponent implements OnInit {
	
	private CurrentMonth: number = new Date().getMonth();
	ngOnInit(): void {

	}
	

	constructor(private testserviceService:TestserviceService)
  {
  }
  page:number=1;
  personas: any;
  unoservi:any;

getAlljson()
{
  this.testserviceService.getjson()
  .subscribe(todos=>{
    this.personas=todos;



});
}
getTask()
{
  this.testserviceService.getunjson('12')
  .subscribe(todo => {
    this.unoservi=todo;
  })

}
createTask()
{
  const task= {
    userId: '1',
    id: '12',
    title: 'prueba',
    completed: true
  };
  this.testserviceService.createTask(task)
  .subscribe((newTask) => {
    console.log(newTask);
  });
}

UpdateTask()
{
  const task={
    userId: '1',
    id: '12',
   
    title: 'Update test',
    completed: true
  }
  this.testserviceService.updateTask(task)
  .subscribe(todo=>{
    console.log(todo);
  });
}
deleteTask(){
  this.testserviceService.DeleteTask('1')
  .subscribe((data) => {
    console.log(data);
  });
}


  



	
	public widgets: any = [
		{
			value: [
				{ title: "Presupuesto", value: "$10000" },//sin enlace
				{ title: "Insumos",value:"$1000" },//con enlace
				{ title: "Diferiencia", value: "$1000" },//sin enlace ac 06
				{ title: "Requisiciones por autorizar", value: "10" },//con enlace ac 08
				{ title: "Requisiciones sin   Compra", value: "20" },//con enlace 
				{ title: "Compras sin Surtir", value: "3" },
				{ title: "Almacen", value: "$15,000" },
				{ title: "Bitacora",value:"20" },
				{ title: "Contratos", value:"32" }
			]
			
		}
		
	];

	

	

	
}
