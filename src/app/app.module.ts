import { SharedModule } from './shared/shared.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Router, RouterModule } from '@angular/router';
import { AuthenticacionGuard } from './authentication-guard.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { LoginComponent } from './authentication/login/login.component';
import { UserModule } from './user/user.module';
import { NotFoundComponent } from './shared/not-found/not-found.component';

@NgModule({
	declarations: [ AppComponent, LoginComponent, SignUpComponent, NotFoundComponent ],
	imports: [
		BrowserModule,
		HttpClientModule,
		SharedModule,
		RouterModule.forRoot([
			{ path: '', redirectTo: '/authentication', pathMatch: 'full' },
			{ path: 'authentication', component: LoginComponent },
			{ path: 'authentication/signup', component: SignUpComponent },
			{
				path: 'user',
				loadChildren: '../app/user/user.module#UserModule',
				canLoad: [ AuthenticacionGuard ]
			},
			{ path: '**', component: NotFoundComponent }
		]),
		BrowserAnimationsModule
	],
	providers: [ AuthenticacionGuard ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
