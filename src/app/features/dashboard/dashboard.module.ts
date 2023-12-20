import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '@shared/shared.module';
import { CoreModule } from '@core/core.module';


@NgModule({
	declarations: [DashboardComponent],
	imports: [
		CommonModule,
		DashboardRoutingModule,
		SharedModule,
		CoreModule
	]
})
export class DashboardModule { }
