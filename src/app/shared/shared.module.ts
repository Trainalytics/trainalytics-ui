import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageService } from 'primeng/api';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { ChartModule } from 'primeng/chart';
import { FieldsetModule } from 'primeng/fieldset';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		FormsModule,
		TranslocoModule,
		DropdownModule,
		MenuModule,
		ButtonModule,
		ToastModule,
		MessagesModule,
		PanelModule,
		TableModule,
		CardModule,
		DividerModule,
		ChartModule,
		FieldsetModule
	],
	exports: [
		TranslocoModule,
		FormsModule,
		DropdownModule,
		ReactiveFormsModule,
		MenuModule,
		ButtonModule,
		ToastModule,
		MessagesModule,
		PanelModule,
		TableModule,
		CardModule,
		DividerModule,
		ChartModule,
		FieldsetModule
	],
	providers: [
		MessageService,
	]
})
export class SharedModule { }
