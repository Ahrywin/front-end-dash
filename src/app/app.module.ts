import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import {HttpClientModule} from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';
import { DataTablesModule } from 'angular-datatables';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
	suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';


import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';

import { RegisterComponent } from './views/register/register.component';

const APP_CONTAINERS = [
	DefaultLayoutComponent
];

import {
	AppAsideModule,
	AppBreadcrumbModule,
	AppHeaderModule,
	AppFooterModule,
	AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { ListaUsersComponent } from './crud/lista-users/lista-users.component';
import { HttpClient } from 'selenium-webdriver/http';

import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppAsideModule,
		AppBreadcrumbModule.forRoot(),
		AppFooterModule,
		AppHeaderModule,
		AppSidebarModule,
		PerfectScrollbarModule,
		BsDropdownModule.forRoot(),
		TabsModule.forRoot(),
		ChartsModule,
		HttpClientModule,
		AppRoutingModule,
		MatSliderModule,
		NgxPaginationModule,
		DataTablesModule
	],
	declarations: [
		AppComponent,
		...APP_CONTAINERS,
		P404Component,
		P500Component,
		RegisterComponent
	],
	providers: [{
		provide: LocationStrategy,
		useClass: HashLocationStrategy
	}],
	bootstrap: [AppComponent]
})
export class AppModule { }
