import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { translocoTestingModuleFactory } from '@testing/transloco-testing.module';
import { NavbarComponent } from '@core/components/navbar/navbar.component';
import { MockComponent } from 'ng-mocks';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('AppComponent', () => {
	let component: AppComponent;
	let fixture: ComponentFixture<AppComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				translocoTestingModuleFactory(),
				RouterTestingModule,
				HttpClientTestingModule,
			],
			declarations: [
				AppComponent,
				MockComponent(NavbarComponent),
			],
			providers: [
			],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should getAppName', () => {
		const result = component.getAppName();
		const expectedResult = 'Trainalytics';

		expect(result).toEqual(expectedResult);
	});

	it('should setAppName', () => {
		component['_setAppName']('Trainalytics');
		const expectedResult = 'Trainalytics';

		expect(component['_appName']).toEqual(expectedResult);
	});
});
