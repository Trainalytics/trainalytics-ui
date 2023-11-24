import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { I18nService } from '@core/service/i18n.service';
import { Lang } from '@models/lang.model';
import { NavLink } from '@models/nav-link.model';
import { ChangeEvent } from '@models/primeng/dropdown-event.model';
import { UserInfo } from '@models/user-info.model';

/**
 * Array that contains each tab of the navbar
 */
const navbarNavigation: Array<NavLink> = [];

@Component({
	selector: 'trainalytics-navbar',
	templateUrl: './navbar.component.html',
	styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit, OnDestroy {

	/**
	 * The application name
	 */
	@Input()
	appName: string;

	/**
	 * The main navigation items in the header
	 */
	mainNavigation: Array<NavLink> = [];

	/**
	 * The languages available in the lang selector
	*/
	availableLangs: Array<{ label: string, value: Lang }> = [];

	/**
	 * The currently selected language
	*/
	currentLang: Lang;

	/**
	 * Information about the connected user
	 */
	connectedUserInfo: UserInfo;

	constructor(
		private i18nService: I18nService,
	) { }

	ngOnInit(): void {
		this.mainNavigation = navbarNavigation;
		this.connectedUserInfo = {
			username: 'dieperid',
			name: 'David',
			email: 'test@gmail.com',
		};
		const languages = this.i18nService.getAvailableLangs();
		this.setDropdownLangValue(languages);
		this.currentLang = this.i18nService.getActiveLang();
	}

	ngOnDestroy(): void {
		throw new Error('Method not implemented.');
	}

	/**
	 * Set the available languages in the dropdown for the different languages
	 * @param langs - the list of the availables languages
	 */
	setDropdownLangValue(langs: Array<Lang>): void {
		this.availableLangs.length = 0;
		langs.forEach(lang => this.availableLangs.push({ label: lang.toUpperCase(), value: lang }));
	}

	/**
	 * Change the current lang of the application
	 * @param evt - the change event on the selector
	 */
	changeLocale(evt: ChangeEvent): void {
		const lang = evt.value;
		this.currentLang = lang;
		this.i18nService.setActiveLang(lang);
	}
}
