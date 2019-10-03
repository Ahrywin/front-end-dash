import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { ListususerModule } from '../listusers/listususer.module';

@Component({
  selector: 'app-lista-users',
  templateUrl: './lista-users.component.html',
  styleUrls: ['./lista-users.component.scss']
})

@NgModule({
  imports: [
    ListususerModule    
  ]
})

export class ListaUsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
