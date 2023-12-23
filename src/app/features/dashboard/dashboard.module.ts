import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { SharedModule } from '@shared/shared.module';
import { CoreModule } from '@core/core.module';
import { DashboardTableComponent } from './dashboard-table/dashboard-table.component';
import { ActivityCardComponent } from './activity/activity-card/activity-card.component';
import { ActivityDetailsComponent } from './activity/activity-details/activity-details.component';


@NgModule({
	declarations: [
		DashboardLayoutComponent,
		DashboardTableComponent,
		ActivityCardComponent,
		ActivityDetailsComponent,
	],
	imports: [
		CommonModule,
		DashboardRoutingModule,
		SharedModule,
		CoreModule
	]
})
export class DashboardModule { }
