import { Router } from '@angular/router';
import { AppComponent } from './../../app.component';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-sign-up',
	templateUrl: './sign-up.component.html',
	styleUrls: [ './sign-up.component.scss' ]
})
export class SignUpComponent implements OnInit {
	constructor(private router: Router) {}

	onClickLogout() {
		AppComponent.setLogged(false);
		this.router.navigate([ '/authentication' ]);
	}

	ngOnInit() {}
}
