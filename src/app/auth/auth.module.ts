import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';


@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		HttpClientModule,
		OAuthModule.forRoot(
			// 	{
			// 	resourceServer: {
			// 		allowedUrls: [], // this param is set from the loaded config at APP_INITIALIZER level
			// 		sendAccessToken: true,
			// 	},
			// }
		),
	]
})
export class AuthModule { }
