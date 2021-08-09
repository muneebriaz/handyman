import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-category-circle',
	templateUrl: './category-circle.component.html',
	styleUrls: ['./category-circle.component.scss']
})
export class CategoryCircleComponent implements OnInit {

	@Input() type: any;
	@Input() text: any;
	@Input() image: any;

	constructor() { }

	ngOnInit(): void { }

	ngOnChanges(): void { }

}
