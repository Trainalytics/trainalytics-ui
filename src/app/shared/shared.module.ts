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
	],
	exports: [
		TranslocoModule,
		FormsModule,
		DropdownModule,
		ReactiveFormsModule,
		MenuModule,
		ButtonModule,
		ToastModule,
		MessagesModule
	],
	providers: [
		MessageService,
	]
})
export class SharedModule { }
