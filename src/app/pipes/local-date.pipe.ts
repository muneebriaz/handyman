import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import * as moment from 'moment-timezone';

@Pipe({
	name: 'localDate',
	pure: false
})
export class LocalDatePipe extends DatePipe implements PipeTransform {

	transform(items: any, format?: string): any {
		let timezone = moment.tz.guess();
		return moment.utc(items).tz(timezone).format('MMM DD, YYYY')
	}
}
