import { Component, Input, OnInit } from '@angular/core';
import { I18nService } from '@core/services/i18n.service';
import { loginFragment } from '@login/config/route.builder';
import { Lang } from '@models/lang.model';
import { ChangeEvent } from '@models/primeng/dropdown-event.model';
import { UserInfo } from '@models/user-info.model';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/auth/services/auth.service';

/**
 * Array that contains each tab of the navbar
 */
const navbarNavigation: Array<MenuItem> = [
	{
		label: 'Home',
		icon: 'pi pi-fw pi-home',
		items: [
			{
				label: 'Login',
				icon: 'pi pi-fw pi-home',
				routerLink: loginFragment,
			}
		]
	},
	{
		label: 'Home',
		icon: 'pi pi-fw pi-home'
	},
	{
		label: 'Home',
		icon: 'pi pi-fw pi-home'
	},
	{
		label: 'Home',
		icon: 'pi pi-fw pi-home'
	},
	{
		label: 'Quit',
		icon: 'pi pi-fw pi-power-off',
	}
];

/**
 * Array that contains each tab of an account
 */
const accountNavigation: Array<MenuItem> = [
	{
		label: 'Settings',
		icon: 'pi pi-fw pi-home',
		routerLink: '/',
	},
	{
		label: 'Logout',
		icon: 'pi pi-fw pi-home',
		routerLink: loginFragment,
	},
];

@Component({
	selector: 'trainalytics-navbar',
	templateUrl: './navbar.component.html',
	styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
	/**
	 * The application name
	 */
	@Input()
	appName: string;

	/**
	 * The main navigation items in the header
	 */
	mainNavigation: Array<MenuItem> = [];

	/**
	 * Account items
	 */
	accountNavigation: Array<MenuItem> = [];

	/**
	 * The languages available in the lang selector
	*/
	availableLangs: Array<{ label: string, value: Lang }> = [];

	/**
	 * The currently selected language
	*/
	currentLang: Lang | undefined;

	/**
	 * Information about the connected user
	 */
	connectedUserInfo: UserInfo;

	constructor(
		private i18nService: I18nService,
		private readonly authService: AuthService,
	) { }

	ngOnInit(): void {
		this.mainNavigation = navbarNavigation;
		const languages = this.i18nService.getAvailableLangs();
		this.accountNavigation = [
			{
				label: this.i18nService.translate('actions.continue'),
				icon: 'pi pi-fw pi-home',
				routerLink: '/',
			},
			{
				label: 'Logout',
				icon: 'pi pi-fw pi-home',
				routerLink: loginFragment,
			},
		];
		this.connectedUserInfo = this.authService.getUserInfo();
		this.setDropdownLangValue(languages);
		this.currentLang = this.i18nService.getActiveLang();
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

	/**
	 * Logout of the application
	 */
	logout(): void {
		console.log("Logout");
		// this.authService.logout();
	}
}
