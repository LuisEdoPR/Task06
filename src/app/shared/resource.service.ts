import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ResourceService {
	constructor(private http: HttpClient) {}

	getResource<T>(url: string): Observable<T[]> {
		return this.http.get<T[]>(url).pipe(
			map((collection: T[]) => {
				return collection;
			})
		);
	}

	getDetailResource<T>(url: string): Observable<T> {
		return this.http.get<T>(url);
	}
}
