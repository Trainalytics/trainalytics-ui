import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { SharedModule } from '@shared/shared.module';
import { CoreModule } from '@core/core.module';


@NgModule({
	declarations: [DashboardLayoutComponent],
	imports: [
		CommonModule,
		DashboardRoutingModule,
		SharedModule,
		CoreModule
	]
})
export class DashboardModule { }
