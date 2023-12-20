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
			{
				id: '1001',
				code: 'nvklal433',
				name: 'Black Watch',
				description: 'Product Description',
				image: 'black-watch.jpg',
				price: 72,
				category: 'Accessories',
				quantity: 61,
				inventoryStatus: 'OUTOFSTOCK',
				rating: 4
			},
			{
				id: '1002',
				code: 'zz21cz3c1',
				name: 'Blue Band',
				description: 'Product Description',
				image: 'blue-band.jpg',
				price: 79,
				category: 'Fitness',
				quantity: 2,
				inventoryStatus: 'LOWSTOCK',
				rating: 3
			},
			{
				id: '1003',
				code: '244wgerg2',
				name: 'Blue T-Shirt',
				description: 'Product Description',
				image: 'blue-t-shirt.jpg',
				price: 29,
				category: 'Clothing',
				quantity: 25,
				inventoryStatus: 'INSTOCK',
				rating: 5
			},
			{
				id: '1004',
				code: 'h456wer53',
				name: 'Bracelet',
				description: 'Product Description',
				image: 'bracelet.jpg',
				price: 15,
				category: 'Accessories',
				quantity: 73,
				inventoryStatus: 'INSTOCK',
				rating: 4
			},
		];
	}
}
