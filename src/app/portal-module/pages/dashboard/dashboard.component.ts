import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { first, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';



import { AppConstants } from '../../../shared/constants';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

	constructor(
		private route: ActivatedRoute,
	) {
	}

	ngOnInit(): void {

	}

}
