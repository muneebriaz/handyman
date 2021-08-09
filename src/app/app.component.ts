import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppConstants } from './shared/constants';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	constructor(
		private router: Router
	) {
		this.router.navigate(['/landing/demo'])
	}

	ngOnInit(): any {

	}


}
