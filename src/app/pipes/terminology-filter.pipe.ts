import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
	name: 'terminologyFilter'
})
export class TerminologyFilterPipe implements PipeTransform {

	transform(text: string): string {
		if (text === 'dummy') {
			return 'Navigational Control';
		}
		return text;
	}
}
