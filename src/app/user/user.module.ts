import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user.component';

@NgModule({
	imports: [
		CommonModule,
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
	declarations: [ UserComponent, UserDetailComponent ],
	exports: [ RouterModule ]
})
export class UserModule {}
