import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AppConfigService } from './app-config.service';
import { envConfigMock } from '@testing/mocks/env-info.mock';


describe('AppConfigService', () => {
	let service: AppConfigService;
	let httpMock: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [AppConfigService],
		});
		service = TestBed.inject(AppConfigService);
		httpMock = TestBed.inject(HttpTestingController);
	});

	afterEach(() => {
		httpMock.verify();
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should have loaded the config and returned the expected info', () => {
		service.loadAppConfig().subscribe(
			envConfig => expect(envConfig).toEqual(envConfigMock)
		);

		const req = httpMock.expectOne(`/assets/config/env.json`);
		expect(req.request.method).toBe('GET');
	});
});
