import { Routes } from '@angular/router';
import { loginFragment } from '../features/login/config/route.builder';

export const routes: Routes = [
	{
		path: loginFragment,
		loadChildren: () => import('@login/login.module').then(m => m.LoginModule),
	},
	// { path: '', redirectTo: '/', pathMatch: 'full' },
];
