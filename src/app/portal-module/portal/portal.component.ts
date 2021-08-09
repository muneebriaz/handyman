import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-portal',
	templateUrl: './portal.component.html',
	styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {

	@Input() showNavBar = false;
	@Input() showUserNavBar = false;
	iframeCall = false;
	isSos = false;
	constructor(
		private route: ActivatedRoute,
	) {
	}

	ngOnInit(): void {
		this.route.queryParams.subscribe(params => {
			if (params.isAnIframeCall) {
				this.iframeCall = true;
			}
			if (params.isSos) {
				this.isSos = true;
			}
		});
	}

}
