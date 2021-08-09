import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	@Input() template: TemplateRef<any>;

	constructor(
		private modalService: NgbModal,
		private router: Router,
		private route: ActivatedRoute,
	) {

	}

	ngOnInit(): void {

	}


}
