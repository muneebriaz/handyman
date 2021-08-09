import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimplebarAngularModule } from 'simplebar-angular';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClickOutsideModule } from 'ng-click-outside';

// COMPONENTS
import { InputComponent } from './input/input.component';

@NgModule({
	exports: [
		CommonModule,
		InputComponent,
		SimplebarAngularModule,
	],
	imports: [
		RouterModule,
		CommonModule,
		ClickOutsideModule,
		SimplebarAngularModule,
		FormsModule,
		ReactiveFormsModule,
	],
	declarations: [
		InputComponent,
	],
})
export class SharedModule { }
