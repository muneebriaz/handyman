import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartModule } from 'angular-highcharts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { MaphilightModule } from 'ng-maphilight';
import { CountUpModule } from 'ngx-countup';

import { PortalModuleRoutingModule } from './portal-module-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { SharedModule } from '../shared/shared.module';



import { CategoryCircleComponent } from './components/category-circle/category-circle.component';
import { SearchCardComponent } from './components/search-card/search-card.component';
import { ServicesBoxComponent } from './components/services-box/services-box.component';
import { ServiceCardComponent } from './components/service-card/service-card.component';
import { PortalComponent } from './portal/portal.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
	declarations: [
		HeaderComponent,
		PortalComponent,
		DashboardComponent,
		CategoryCircleComponent,
		SearchCardComponent,
		ServicesBoxComponent,
		ServiceCardComponent
	],
	imports: [
		InfiniteScrollModule,
		ChartModule,
		MaphilightModule,
		PortalModuleRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		SharedModule,
		NgxSliderModule,
		NgbModule,
		CountUpModule,

	]
})
export class PortalModuleModule { }
