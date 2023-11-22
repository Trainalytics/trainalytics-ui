import { NgModule } from "@angular/core";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { NavbarUserInfoComponent } from "./components/navbar-user-info/navbar-user-info.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { TranslocoRootModule } from "./i18n/transloco-root.module";

@NgModule({
	declarations: [NavbarComponent, NavbarUserInfoComponent],
	imports: [CommonModule, RouterModule, TranslocoRootModule,
	],
	exports: [NavbarComponent],
	providers: [],
})
export class CoreModule { }
