import { UserDetailComponent } from './user-detail/user-detail.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: '',
				children: [
					{
						path: '',
						component: UserComponent
					},
					{
						path: ':id',
						component: UserDetailComponent
					}
				]
			}
		])
	],
	providers: [],
	exports: [ RouterModule ]
})
export class EmployeeRoutingModule {}
