import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WidgetComponent } from '../widget/widget.component';


const routes: Routes = [
{
  path:'',
  component:WidgetComponent,
  data:{
    title:'component'
  }
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashTesterRoutingModule { }
