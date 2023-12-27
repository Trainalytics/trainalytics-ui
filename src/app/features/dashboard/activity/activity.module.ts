import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityRoutingModule } from './activity-routing.module';
import { ActivityDetailsComponent } from './activity-details/activity-details.component';


@NgModule({
	declarations: [
		ActivityDetailsComponent,
	],
	imports: [
		CommonModule,
		ActivityRoutingModule
	]
})
export class ActivityModule { }
