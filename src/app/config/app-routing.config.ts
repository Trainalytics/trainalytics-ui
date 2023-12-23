import { Routes } from '@angular/router';
import { loginFragment } from '../features/login/config/route.builder';
import { dashboardFragment } from '@features/dashboard/config/route.builder';

export const routes: Routes = [
	{
		path: loginFragment,
		loadChildren: () => import('@features/login/login.module').then(m => m.LoginModule),
	},
	{
		path: dashboardFragment,
		loadChildren: () => import('@features/dashboard/dashboard.module').then(m => m.DashboardModule),
	},
	{ path: '', redirectTo: dashboardFragment, pathMatch: 'full' },
	{ path: '**', redirectTo: dashboardFragment },
];
