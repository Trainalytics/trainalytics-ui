
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { asyncScheduler } from 'rxjs';
import { MenuModule } from 'primeng/menu';
import { DropdownModule } from 'primeng/dropdown';
import { translocoTestingModuleFactory } from '@testing/transloco-testing.module';

import { AuthService } from '@auth/services/auth.service';
import { NavbarComponent } from './navbar.component';
import { MockComponent, MockProvider } from 'ng-mocks';
import { AppConfigService } from '@core/services/app-config.service';
import { By } from '@angular/platform-browser';
import { UserInfo } from '@models/user-info.model';

describe('NavbarComponent', () => {
	let component: NavbarComponent;
	let fixture: ComponentFixture<NavbarComponent>;
	const authUserMock: UserInfo = {
		sub: 'abc',
		name: 'John Doh',
		email: 'abc@example.org',
		lang: 'fr',
		picture: ''
	};
	const authServiceSpy = jasmine.createSpyObj<AuthService>('AuthService', ['getUserInfo']);

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [
				NavbarComponent,
			],
			imports: [
				translocoTestingModuleFactory(),
				FormsModule,
				RouterTestingModule,
				MenuModule,
				DropdownModule,
			],
			providers: [
				MockProvider(AppConfigService),
				{ provide: AuthService, useValue: authServiceSpy },
			],
		}).compileComponents();
	});

	beforeEach(() => {
		authServiceSpy.getUserInfo.and.returnValue(authUserMock);
		fixture = TestBed.createComponent(NavbarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
