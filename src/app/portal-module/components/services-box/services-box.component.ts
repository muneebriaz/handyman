import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-services-box',
	templateUrl: './services-box.component.html',
	styleUrls: ['./services-box.component.scss']
})
export class ServicesBoxComponent implements OnInit {

	services: any = [
		{
			heading: 'Painting',
			image: 'https://www.familyhandyman.com/wp-content/uploads/2018/09/GettyImages-a0034-000149b.jpg',
		},
		{
			heading: 'Gardening',
			image: 'https://post.greatist.com/wp-content/uploads/sites/2/2020/07/GRT-female-gardening-732x549-thumb-732x549.jpg',
		},
		{
			heading: 'Plumbing',
			image: 'https://betterhousekeeper.com/wp-content/uploads/2019/09/fixing-plumbing-system.jpg',
		},
		{
			heading: 'Moving',
			image: 'https://www.thebalance.com/thmb/GX5Fz9T4rJiYlN9_79V4vEGmDss=/3744x3744/smart/filters:no_upscale()/young-man-moving-in-585831789-5b6b6f7d4cedfd00258cf2cd.jpg',
		}
	]

	constructor() { }

	ngOnInit(): void { }

	ngOnChanges(): void { }

}
