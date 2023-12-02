import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		FormsModule,
		TranslocoModule,
		DropdownModule
	],
	exports: [
		TranslocoModule,
		FormsModule,
		DropdownModule,
		ReactiveFormsModule,
	],
})
export class SharedModule { }
