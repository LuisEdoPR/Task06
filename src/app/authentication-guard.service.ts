import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';
import { AppComponent } from './app.component';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticacionGuard implements CanLoad {
	constructor(private router: Router) {}

	canLoad(ROUTE: Route) {
		if (!AppComponent.getLogged()) {
			this.router.navigate([ '/not-found' ]);
		}
		return AppComponent.getLogged();
	}
}
