import { Component, OnDestroy, OnInit } from '@angular/core';
import { I18nService } from '@core/service/i18n.service';
import { Lang } from '@models/locale.model';
import { MainNavLink } from '@models/main-nav-link.model';
import { ChangeEvent } from '@models/primeng/dropdown-event.model';

/**
 * Array that contains each tab of the navbar
 */
const navbarNavigation: Array<MainNavLink> = [];

@Component({
	selector: 'trainalytics-navbar',
	templateUrl: './navbar.component.html',
	styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit, OnDestroy {

	/**
	 * The main navigation items in the header
	 */
	mainNavigation: Array<MainNavLink> = [];

	/**
	 * The languages available in the lang selector
	*/
	availableLangs: Array<{ label: string, value: Lang }> = [];

	/**
	 * The currently selected language
	*/
	currentLang: Lang = 'fr';

	constructor(
		private i18nService: I18nService,
	) { }

	ngOnInit(): void {
		this.mainNavigation = navbarNavigation;
		const languages = this.i18nService.getAvailableLangs();
		this.setDropdownLangValue(languages);
		this.currentLang = this.i18nService.getActiveLang();
	}

	ngOnDestroy(): void {
		throw new Error('Method not implemented.');
	}

	/**
	 * Map the availables languages to the language dropdown selector model
	 * @param langs - the available language list
	 */
	setDropdownLangValue(langs: Array<Lang>): void {
		this.availableLangs.length = 0;
		langs.forEach(lang => this.availableLangs.push({ label: lang.toUpperCase(), value: lang }));
	}

	/**
	 * Change the current lang of the app
	 * @param evt - the change event on the selector
	 */
	changeLocale(evt: ChangeEvent): void {
		const lang = evt.value;
		this.currentLang = lang;
		// this.i18nService.setActiveLang(lang);
	}
}
