import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

@Injectable({
	providedIn: 'root'
})
export class StoreService {
	constructor(
		private store: Store,

	) {
	}

	selectFromStore(selector: any) {
		return this.store.pipe(select(selector));
	}

	updateInStore(action: any, data: any) {
		return this.store.dispatch({ type: action, payload: data });
	}
}
