import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { translocoTestingModuleFactory } from '@testing/transloco-testing.module';
import { NavbarComponent } from '@core/components/navbar/navbar.component';
import { MockComponent } from 'ng-mocks';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OAuthService } from 'angular-oauth2-oidc';
import { of } from 'rxjs';


describe('AppComponent', () => {
	let component: AppComponent;
	let fixture: ComponentFixture<AppComponent>;

	beforeEach(async () => {
		const spy = jasmine.createSpyObj('OAuthService', [
			'configure',
			'loadDiscoveryDocumentAndLogin',
			'getIdentityClaims',
			'setupAutomaticSilentRefresh',
		], {
			events: of({ type: 'unit-test' }),
		});
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
});
