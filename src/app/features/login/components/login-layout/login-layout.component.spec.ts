import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLayoutComponent } from './login-layout.component';
import { translocoTestingModuleFactory } from '@testing/transloco-testing.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MockComponent } from 'ng-mocks';
import { LoginFormComponent } from '../login-form/login-form.component';

describe('LoginLayoutComponent', () => {
	let component: LoginLayoutComponent;
	let fixture: ComponentFixture<LoginLayoutComponent>;

	beforeEach(async () => {
		TestBed.configureTestingModule({
			imports: [
				translocoTestingModuleFactory(),
				HttpClientTestingModule
			],
			declarations: [
				LoginLayoutComponent,
				MockComponent(LoginFormComponent)
			]
		}).compileComponents();

		fixture = TestBed.createComponent(LoginLayoutComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
