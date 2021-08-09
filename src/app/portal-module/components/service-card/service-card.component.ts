import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-service-card',
	templateUrl: './service-card.component.html',
	styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent implements OnInit {

	@Input() service: any;

	constructor() { }

	ngOnInit(): void { }

	ngOnChanges(): void { }

}
