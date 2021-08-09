import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	baseUrl = `${environment.baseUrl}/api`;
	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json',
		})
	};
	constructor(private http: HttpClient) { }

	post(URL: string, data: any) {
		return this.http.post<any>(this.baseUrl + URL, data, this.httpOptions);
	}

	put(URL: string, data: any) {
		return this.http.put<any>(this.baseUrl + URL, data, this.httpOptions);
	}

	get(URL: string) {
		return this.http.get<any[]>(this.baseUrl + URL, this.httpOptions);
	}

	delete(URL: string) {
		return this.http.delete<any[]>(this.baseUrl + URL, this.httpOptions);
	}

	upload(URL: string, file: File) {
		const formData = new FormData();
		formData.append('applicationFile', file);

		const httpOptions = {
			params: new HttpParams(),
			reportProgress: true
		};
		const req = new HttpRequest('POST', this.baseUrl + URL, formData, httpOptions);
		return this.http.request(req);
	}

	getFromOuter(URL: string) {
		return this.http.get<any[]>(URL);
	}

	getWithCustomURL(token: any, URL: any) {
		const httpOptions = {
			headers: new HttpHeaders({
				Authorization: `Bearer ${token}`,
			})
		};
		return this.http.get<any[]>(URL, httpOptions);
	}
}
