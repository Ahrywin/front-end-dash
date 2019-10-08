import { Component, OnInit } from '@angular/core';
import {TestserviceService} from '../../../servicios/testservice.service';
import {Test} from '../../../interfaces/test';


@Component({
  selector: 'app-detalle-insumos',
  templateUrl: './detalle-insumos.component.html',
  styleUrls: ['./detalle-insumos.component.scss']
})
export class DetalleInsumosComponent implements OnInit {
  
  constructor(private testserviceService:TestserviceService)
  {
    this.getAlljson();

  }
  page:number=1;
  
  personas: any;
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
    console.log(todo);
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

  ngOnInit() {

    this.getAlljson();
  }

  

}
