import {
	Component, Input, Output, OnInit, OnChanges,
	EventEmitter
} from '@angular/core';
import { FormControl } from '@angular/forms';

import { AppConstants } from '../constants';

@Component({
	selector: 'app-input',
	templateUrl: './input.component.html',
	styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit, OnChanges {
	@Input() labelText = '';
	@Input() placeholder = '';
	@Input() isRequired = true;
	@Input() inputType = '';
	@Input() minLength = 0;
	@Input() maxLength = 0;
	@Input() control: any = FormControl;
	@Input() formSubmit = false;
	@Input() fileType = '';
	@Input() disabled = false;
	@Input() fileUploadPercentage = 0;
	@Input() errorMessage = '';
	@Input() isPswdStrengthMsgVisible = false;
	@Input() dropDownData: any;
	@Input() isDropDownSearchEnable = false;
	@Input() fixedWidth = false;
	@Input() dropDownSelectMessage = 'Select';
	@Input() radioName = '';
	@Input() radioValue = '';
	@Input() checkboxName = '';
	@Input() checkboxValue = '';
	@Input() labelIcon = '';
	@Input() dropDownExpand = false;
	@Input() minimumTime = '';
	@Input() maximumTime = '';
	@Output() onInputSelect = new EventEmitter();
	@Output() onChange = new EventEmitter();
	@Output() onSelect = new EventEmitter();
	@Output() onClick = new EventEmitter();
	globalDropdownData: [];
	searchText = '';
	INPUT_TYPE = AppConstants.INPUT_TYPE;
	input = this.INPUT_TYPE.TEXT;
	isDropdownExpanded = false;
	erorrMessage = '';
	isPasswordType = false;
	constructor() { }

	ngOnInit(): void {
		this.input = this.inputType;
		this.isPasswordType = (this.input === this.INPUT_TYPE.PASSWORD) ? true : false;
	}

	labelIconClicked(): void {
		this.onClick.emit(true);
	}

	onDataChange(event: any): void {
		this.onChange.emit(event.target.value);
	}

	onFileChange(event: any): void {
		this.onChange.emit(event.target.files);
	}

	ngOnChanges(): void {
		this.globalDropdownData = this.dropDownData;
	}

	setDropdown(value: string, title: string, isChecked: boolean = false): void {
		this.dropDownSelectMessage = title;
		this.isDropdownExpanded = this.dropDownExpand;
		const checkValue = this.dropDownData.filter((item: any) => item.value === value)[0];
		if (checkValue.isMulti) {
			const index = this.dropDownData.findIndex((obj: any) => obj.value === value);
			this.dropDownData[index].isChecked = !isChecked;
			this.onSelect.emit({ value, isChecked });
		} else {
			this.onSelect.emit(value);
		}
	}

	onDropDownSearch(query: string) {
		this.dropDownData = this.globalDropdownData;
		this.dropDownData = this.dropDownData.filter((item: any) => {
			return item.title.toLowerCase().includes(query.toLowerCase())
		});
	}

	showHideInput(): void {
		switch (this.input) {
			case this.INPUT_TYPE.PASSWORD:
				this.input = this.INPUT_TYPE.TEXT;
				break;
			case this.INPUT_TYPE.TEXT:
				this.input = this.INPUT_TYPE.PASSWORD;
				break;
		}
	}

	toggleDropdown(): void {
		this.isDropdownExpanded = !this.isDropdownExpanded;
		this.onClick.emit();
	}

	onClickOutside(): void {
		this.isDropdownExpanded = false;
	}

	onClickInput() {
		this.onInputSelect.emit();
	}
}
