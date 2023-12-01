import { APP_INITIALIZER, NgModule } from "@angular/core";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { TranslocoRootModule } from "./i18n/transloco-root.module";
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from "@angular/forms";
import { AuthModule } from "@auth/auth.module";
import { AuthService } from "@auth/services/auth.service";
import { AppConfigService } from "./services/app-config.service";
import { OAuthModuleConfig } from "angular-oauth2-oidc";
import { appInitializerFactory } from "@config/initializers/app.initializer";

@NgModule({
	declarations: [NavbarComponent],
	imports: [
		CommonModule,
		RouterModule,
		TranslocoRootModule,
		AuthModule,
		DropdownModule,
		FormsModule
	],
	exports: [NavbarComponent],
	providers: [
		{
			provide: APP_INITIALIZER,
			useFactory: appInitializerFactory,
			multi: true,
			deps: [AppConfigService, OAuthModuleConfig, AuthService],
		},
	],
})
export class CoreModule { }
