import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.interface';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ResourceService } from '../../shared/resource.service';

@Component({
	selector: 'app-user-detail',
	templateUrl: './user-detail.component.html',
	styleUrls: [ './user-detail.component.scss' ]
})
export class UserDetailComponent implements OnInit {
	userId: string;
	userDetail: User;

	urlUsers = 'https://jsonplaceholder.typicode.com/users/';

	constructor(
		private route: ActivatedRoute,
		private http: HttpClient,
		private resourceService: ResourceService
	) {
		this.route.params.subscribe((params) => {
			this.userId = params['id'];
		});
		this.resourceService
			.getDetailResource<User>(this.urlUsers + this.userId)
			.subscribe((user) => (this.userDetail = user));
	}

	ngOnInit() {}
}
