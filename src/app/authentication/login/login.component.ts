import { UserInterface } from './../model/user.interface';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from './../../app.component';
import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material';
import { Router } from '@angular/router';
import { ResourceService } from '../../shared/resource.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {
	hideError = true;
	user: string;
	password: string;
	hide = true;
	genericUser = 'admin';
	genericPassword = 'admin';

	constructor(private router: Router, private resourceService: ResourceService) {}

	onClickLogin() {
		this.hideError = true;
		if (this.genericUser === this.user && this.genericPassword === this.password) {
			AppComponent.setLogged(true);
			this.router.navigate([ 'user' ]);
		} else {
			this.hideError = false;
		}
	}

	ngOnInit() {}
}
