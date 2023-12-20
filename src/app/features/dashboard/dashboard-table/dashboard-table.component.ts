import { Component, OnInit } from '@angular/core';
import { I18nService } from '@core/services/i18n.service';

@Component({
	selector: 'trainalytics-dashboard-table',
	templateUrl: './dashboard-table.component.html',
	styleUrl: './dashboard-table.component.scss'
})
export class DashboardTableComponent implements OnInit {

	activites: Array<any> = [];

	constructor(
		private readonly _i18n: I18nService,
	) { }

	ngOnInit(): void {
		this.initActivites();
	}


	initActivites(): void {
		this.activites = [
			{
				id: '1000',
				code: 'f230fh0g3',
				name: 'Bamboo Watch',
				description: 'Product Description',
				image: 'bamboo-watch.jpg',
				price: 65,
				category: 'Accessories',
				quantity: 24,
				inventoryStatus: 'INSTOCK',
				rating: 5
			},
		];
	}
}
