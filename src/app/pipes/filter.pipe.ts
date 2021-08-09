import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

import { LocalDatePipe } from './local-date.pipe';

@Pipe({
	name: 'filter',
	pure: false
})
export class FilterPipe implements PipeTransform {

	transform(items: any[], searchText: string, type: number): any[] {
		if (!items) { return []; }
		if (!searchText || searchText.length < 2) { return items; }
		if (!type) { return items; }
		searchText = searchText.toLowerCase().trim();
		const datePipe = new LocalDatePipe('en-US');

		const actualDatePipe = new DatePipe('en-US');

		return items.filter(it => {
			let res = false;
			switch (type) {
				case 1:
					res = (datePipe.transform(it.CREATEDATETIME || '').toLowerCase().includes(searchText) || ((it.DURATION) ? it.DURATION + ' Minutes' : '---').toLowerCase().includes(searchText) || (it.OS + '/' + it.Browser).toLowerCase().includes(searchText) || (it.STATUSVALUE).toLowerCase().includes(searchText) || (it.STATUSVALUE === 'Completed' ? it.TOTALPAGES + ' Web pages tested' : it.STATUSVALUE === 'Failed' ? it.PAGEERROR + '/' + it.TOTALPAGES + ' Tests Failed' : it.STATUSVALUE === 'Error' ? 'Done' : it.STATUSVALUE).toLowerCase().includes(searchText));
					break;
				case 2:
					res = (it.BaseURL.toLowerCase().includes(searchText) || (it.ScorePerformance + '%').toLowerCase().includes(searchText)
						|| (it.ScoreAccessibility + '%').toLowerCase().includes(searchText) || (it.ScoreSEO + '%').toLowerCase().includes(searchText)
						|| (it.ScorePWA + '%').toLowerCase().includes(searchText) || (it.ScoreBestPractice + '%').toLowerCase().includes(searchText));
					break;
				case 3:
					res = (datePipe.transform(it.CreateDateTime || '').toLowerCase().includes(searchText) || (datePipe.transform(it.ModifiedDateTime, 'MMM d, y, h:mm a') || '').toLowerCase().includes(searchText) || ((it.PackageName ? it.PackageName.toLowerCase() : '').includes(searchText)) || ((it.Platform === 1) ? 'Android' : (it.Platform === 2) ? 'iOS' : (it.Platform === 3) ? 'Windows' : 'Website').toLowerCase().includes(searchText));
					break;
				case 4:
					res = (it.Description || '').toLowerCase().includes(searchText) || (it.Failed + 'Web Pages').includes(searchText)
						|| (it.Category || '').toLowerCase().includes(searchText)
						|| (it.Percentage + '%').toLowerCase().includes(searchText) || (it.Impact || '').toLowerCase().includes(searchText);
					break;
				case 5:
					res = (it.VertexName.toLowerCase().includes(searchText) || (it.PERFORMANCE + '%').toLowerCase().includes(searchText)
						|| (it.VISUALQUALITY + '%').toLowerCase().includes(searchText) || (it.SECURITY + '%').toLowerCase().includes(searchText)
						|| (it.BESTPRACTICES + '%').toLowerCase().includes(searchText) || (it.RELIABILITY + '%').toLowerCase().includes(searchText));
					break;
				case 6:  // type 6 means that the requesting page is Test runs of mobile
					res = ((it.TestName || '').toLowerCase().includes(searchText)
						|| datePipe.transform(it.CreateDateTime || '').toLowerCase().includes(searchText) || ((it.ScenarioGroupID) == null ? 'Exploratory' : 'Scenario').toLowerCase().includes(searchText) || ((it.DURATION) ? it.DURATION + 'Minutes' : '---').toLowerCase().includes(searchText) || (it.DeviceOSName + '/' + it.DeviceManufacturer).toLowerCase().includes(searchText) || (it.StatusValue.includes('COMPLETED') ? 'Completed' : it.StatusValue.includes('FAILED') ? 'Failed' : it.StatusValue.includes('ERROR') ? 'Error' : 'Inprogress').toLowerCase().includes(searchText) || ((!it.ScenarioGroupID && it.StatusValue.includes('COMPLETED') ? (it.PASSED + it.FAILED) + ' Screens tested' : !it.ScenarioGroupID && it.StatusValue.includes('FAILED') ? it.FAILED + '/' + (it.PASSED + it.FAILED) + ' Screens Failed' : !it.ScenarioGroupID && it.StatusValue.includes('ERROR') ? 'Done' : 'Inprogress')).toLowerCase().includes(searchText) || ((it.ScenarioGroupID && it.StatusValue.includes('COMPLETED')) ? it.Scenarios_Passed + '/' + it.TOTAL_SCENARIOS + ' Scenarios Passed' : '').toLowerCase().includes(searchText));
					break;
				case 7:
					res = (it.DeviceName.toLowerCase().includes(searchText));
					break;
				case 8:
					res = (it.VERTEXNAME.toLowerCase().includes(searchText) || (it.PERFORMANCE + '%').toLowerCase().includes(searchText)
						|| (it.VISUALQUALITY + '%').toLowerCase().includes(searchText) || (it.SECURITY + '%').toLowerCase().includes(searchText)
						|| (it.BESTPRACTICES + '%').toLowerCase().includes(searchText) || (it.RELIABILITY + '%').toLowerCase().includes(searchText));
					break;
				case 9:
					res = (it.email.toLowerCase().includes(searchText) || it.platform.toLowerCase().includes(searchText) || (datePipe.transform(it.createDateTime || '').toLowerCase().includes(searchText)) || (it.testRunId + '').includes(searchText) || ((it.duration) ? it.duration + ' Minutes' : ' Minutes').toLowerCase().includes(searchText));
					break;
				case 10:
					res = (it.ScenarioName.toLowerCase().includes(searchText));
					break;
				case 11: // type 11 means that the scenarios summary search
					res = (it.ScenarioName.toLowerCase().includes(searchText)
						|| ((it.Duration) ? it.Duration + ' Minutes' : ' Minutes').toLowerCase().includes(searchText)
						|| (it.Statusvalue.includes('Passed') ? 'Passed' : it.Statusvalue.includes('Failed') ? 'Failed' : it.Statusvalue.includes('Blocked') ? 'Blocked' : 'In Progress').toLowerCase().includes(searchText));
					break;
				case 12:
					res = ((it.Manufacturer + ' ' + it.Model + '/' + it.CodeName).toLowerCase().includes(searchText)
						|| ((it.StartTime) ? datePipe.transform(it.StartTime, 'MMM d, y, h:mm a') : '').toLowerCase().includes(searchText)
						|| (it.Statusvalue || '').toLowerCase().includes(searchText) || ((it.Duration) ? (it.Duration / 60000).toFixed(2) + ' Minutes' : ' ---').toLowerCase().includes(searchText));
					break;
				case 13: // type 12 means scenario html (from app nav menu)
					res = (it.ScenarioName.toLowerCase().includes(searchText)
						|| ((it.LastRunDate !== '' && it.LastRunDate !== null)
							? (datePipe.transform(it.LastRunDate, 'MMM d, y, h:mm a') || '').toLowerCase().includes(searchText) : false)
						|| ((!it.LastTenResults.length || it.LastTenResults === null) ? ('N/A').toLowerCase().includes(searchText) : false));
					break;
				case 14: // 14 means security issues from web summary view page
					res = (it.text.toLowerCase().includes(searchText) || it.url.toLowerCase().includes(searchText));
					break;
				case 15: // type 15 means live data filter
					res = (datePipe.transform(it.CreateDateTime || '').toLowerCase().includes(searchText)
						|| (it.Region.toString()).toLowerCase().includes(searchText) || (it.DeviceOS.toString()).toLowerCase().includes(searchText)
						|| (it.Duration + 'Minutes').toLowerCase().includes(searchText) || it.DeviceName.toLowerCase().includes(searchText));
					break;
				case 16: // type 16 means report security list
					res = (it.Description || '').toLowerCase().includes(searchText)
						|| (it.ImpactedScreens + 'App Screen').includes(searchText)
						|| (it.Percentage + '%').toLowerCase().includes(searchText) || (it.Impact || '').toLowerCase().includes(searchText);
					break;
				case 17: // type 17 means report (perf,crash,exceptions,visual) list
					res = (it.VertexName.toLowerCase().includes(searchText)
						|| (it.PERFORMANCE + '%').toLowerCase().includes(searchText)
						|| (it.VISUALQUALITY + '%').toLowerCase().includes(searchText)
						|| (it.SECURITY + '%').toLowerCase().includes(searchText) || (it.BESTPRACTICES + '%').toLowerCase().includes(searchText)
						|| (it.RELIABILITY + '%').toLowerCase().includes(searchText));
					break;
				case 18: // type 18 means recommended scenarios
					res = (it.ScenarioName.toLowerCase().includes(searchText) || it.ScenarioDescription.toLowerCase().includes(searchText)
						|| ((it.CreatedAt !== '' && it.CreatedAt !== null)
							? (datePipe.transform(it.CreatedAt, 'MMM d, y, h:mm a') || '').toLowerCase().includes(searchText) : false)
						|| it.ScenarioUrl.toLowerCase().includes(searchText));
					break;
				case 19: // reports --> Visual Quality (report list)
					res = (it.Version.toLowerCase().includes(searchText) || it.DeviceName.toLowerCase().includes(searchText)
						|| (it.NavigationFailures + '').includes(searchText) || (it.UILayoutFailures + '').includes(searchText) || (it.AccessibilityFailures + '').includes(searchText) || (it.LegibilityFailures + '').includes(searchText));
					break;
				case 20: // reports --> Crashes (report list)
					res = (it.Version.toLowerCase().includes(searchText) || it.DeviceName.toLowerCase().includes(searchText)
						|| (it.ExceptionsFailures + '').includes(searchText) || (it.CrashesFailures + '').includes(searchText));
					break;
				case 21: // release Search
					res = (it.ReleaseName.toLowerCase().includes(searchText) || it.ReleaseDescription.toLowerCase().includes(searchText));
					break;
				case 22: // release Search
					res = (it.Category.toLowerCase().includes(searchText) || it.Description.toLowerCase().includes(searchText)
						|| it.Impact.toLowerCase().includes(searchText));
					break;
				case 23: // manual testcases
					res = (it.LiveTestCaseName.toLowerCase().includes(searchText) || it.Email.toLowerCase().includes(searchText)
						|| ((it.CreatedOn !== '' && it.CreatedOn !== null) ?
							(datePipe.transform(it.CreatedOn, 'MMM d, y, h:mm a') || '').toLowerCase().includes(searchText) : false));
					break;
				default:
					res = false;
					break;
			}
			return res;
		});
	}
}
