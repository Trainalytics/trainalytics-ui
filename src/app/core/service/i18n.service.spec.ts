// import { TestBed } from '@angular/core/testing';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { PrimeNGConfig, Translation } from 'primeng/api';
// import { translocoTestingModuleFactory } from '@testing/transloco-testing.module';
// import { I18nService } from './i18n.service';

// describe('I18nService', () => {
// 	let i18nService: I18nService;

// 	const primengConfigStub = {
// 		setTranslation: (_translation: Translation) => ({}),
// 	} as unknown as PrimeNGConfig;

// 	beforeEach(() => {
// 		TestBed.configureTestingModule({
// 			imports: [
// 				HttpClientTestingModule,
// 				translocoTestingModuleFactory(),
// 			],
// 			providers: [
// 				{ provide: PrimeNGConfig, useValue: primengConfigStub },
// 			],
// 		});
// 		i18nService = TestBed.inject(I18nService);
// 	});

// 	it('should be created', () => {
// 		expect(i18nService).toBeTruthy();
// 	});

// 	it('should set the language to the html lang attribute', () => {
// 		document.documentElement.lang = '';
// 		i18nService.updateHtmlLang();
// 		expect(document.documentElement.lang).not.toBe('');
// 		expect(document.documentElement.lang).toBe(i18nService.getActiveLang());
// 	});

// 	it('should set pass the translations to primeNg config', () => {
// 		const spy = spyOn(primengConfigStub, 'setTranslation');
// 		i18nService.updatePrimeComponentLocale();
// 		expect(spy).toHaveBeenCalled();
// 	});
// });
