import { NgModule } from "@angular/core";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { TranslocoRootModule } from "./i18n/transloco-root.module";
import { AuthService } from "../auth/services/auth.service";
import { AuthModule } from "../auth/auth.module";

@NgModule({
	declarations: [NavbarComponent],
	imports: [
		CommonModule,
		RouterModule,
		TranslocoRootModule,
		AuthModule
	],
	exports: [NavbarComponent],
	providers: [AuthService],
})
export class CoreModule { }
