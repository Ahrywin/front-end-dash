import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaUsersComponent } from '../lista-users/lista-users.component';


const routes: Routes = [
  {
    path:'',
    component:ListaUsersComponent,
    data: {
      title:'Lista de Usuarios'
    }
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListususerRoutingModule { }
