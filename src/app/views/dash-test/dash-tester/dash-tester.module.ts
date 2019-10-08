import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashTesterRoutingModule } from './dash-tester-routing.module';
import { WidgetComponent } from '../widget/widget.component';


@NgModule({
  declarations: [WidgetComponent],
  imports: [
    CommonModule,
    DashTesterRoutingModule
  ]
})
export class DashTesterModule { }
