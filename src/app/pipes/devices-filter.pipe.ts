import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'devicesFilter'
})
export class DevicesFilterPipe implements PipeTransform {

	transform(list: any, searchText: any, args?: any): any {
		if (!searchText) {
			return list;
		}
		searchText = searchText.toLowerCase().trim();
		const matchString = (s: string) => s ? s.toLowerCase().includes(searchText) : false;

		return list.filter(it => {
			let result = false;
			const {
				FriendlyDeviceName, Manufacturer, RAM, OSName
			} = it;
			result = (matchString(FriendlyDeviceName) ||
				matchString(Manufacturer) ||
				matchString(RAM) ||
				matchString(OSName));
			return result;
		});
	}

}
