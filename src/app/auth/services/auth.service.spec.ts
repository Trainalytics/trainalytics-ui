import { TestBed } from '@angular/core/testing';
import { OAuthService } from 'angular-oauth2-oidc';
import { of } from 'rxjs';
import { AuthService } from './auth.service';
import { EnvInfo } from '@models/env-info.model';
import { IdToken } from '@models/id-token.model';

describe('AuthService', () => {
	let authService: AuthService;
	let oAuthServiceSpy: jasmine.SpyObj<OAuthService>;

	beforeEach(() => {
		const spy = jasmine.createSpyObj('OAuthService', [
			'configure',
			'loadDiscoveryDocumentAndLogin',
			'getIdentityClaims',
			'setupAutomaticSilentRefresh',
		], {
			events: of({ type: 'unit-test' }),
		});
		TestBed.configureTestingModule({
			providers: [
				AuthService,
				{ provide: OAuthService, useValue: spy },
			],
		});
		authService = TestBed.inject(AuthService);
		oAuthServiceSpy = TestBed.inject(OAuthService) as jasmine.SpyObj<OAuthService>;
	});

	it('should be created', () => {
		expect(authService).toBeTruthy();
	});

	it('should setup auth from the oAuthService and setup silent refresh', async () => {
		// Arrange
		const envInfoMock: Partial<EnvInfo> = {

		};
		oAuthServiceSpy.loadDiscoveryDocumentAndLogin.and.callFake(() => Promise.resolve(true));

		// Act
		await authService.setup(envInfoMock as EnvInfo);

		// Assert
		expect(oAuthServiceSpy.loadDiscoveryDocumentAndLogin).toHaveBeenCalled();
		expect(oAuthServiceSpy.setupAutomaticSilentRefresh).toHaveBeenCalled();
	});

	describe('getUserInfo from storage', () => {
		const storageKey = 'id_token_claims_obj';
		const fakeIdToken: IdToken = {
			sub: 'abc',
			name: 'John Doh',
			email: 'abc@example.org',
			language: 'fr',
			picture: ''
		};

		it('should return the stored user info from the token', () => {
			sessionStorage.setItem(storageKey, JSON.stringify(fakeIdToken));

			const userInfo = authService.getUserInfo();

			expect(userInfo.sub).toBe(fakeIdToken.sub);
			expect(userInfo.name).toBe(fakeIdToken.name);
			expect(userInfo.email).toBe(fakeIdToken.email);
			expect(userInfo.lang).toBe(fakeIdToken.language);
			expect(userInfo.picture).toBe(fakeIdToken.picture);
		});

		it('should throw if nothing is stored', () => {
			sessionStorage.removeItem(storageKey);
			expect(() => authService.getUserInfo()).toThrow();
		});
	});
});
