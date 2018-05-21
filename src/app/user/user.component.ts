import { RouterModule, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { pluck } from 'rxjs/operators';
import { User } from './model/user.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ResourceService } from '../shared/resource.service';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: [ './user.component.scss' ]
})
export class UserComponent implements OnInit {
	urlUsers = 'https://jsonplaceholder.typicode.com/users';
	users$: Observable<User[]>;
	constructor(
		private route: ActivatedRoute,
		private http: HttpClient,
		private resourceService: ResourceService
	) {
		this.users$ = this.resourceService.getResource<User>(this.urlUsers);
	}

	ngOnInit() {}
}
