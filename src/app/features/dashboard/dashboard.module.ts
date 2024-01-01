import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';
import { SharedModule } from '@shared/shared.module';
import { CoreModule } from '@core/core.module';
import { DashboardTableComponent } from './components/dashboard-table/dashboard-table.component';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component';
import { ActivityDetailsComponent } from './components/activity/activity-details/activity-details.component';


@NgModule({
	declarations: [
		DashboardLayoutComponent,
		DashboardTableComponent,
		DashboardCardComponent,
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
