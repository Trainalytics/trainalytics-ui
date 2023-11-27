import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserInfo } from '@models/user-info.model';

interface LoginForm {
	username: FormControl<string>;
	email: FormControl<string>;
	password: FormControl<string>;
}

@Component({
	selector: 'trainalytics-login-form',
	templateUrl: './login-form.component.html',
	styleUrl: './login-form.component.scss'
})
export class LoginFormComponent implements OnInit {

	/**
	 * The event which emit the form values to the parent
	 */
	@Output()
	accountCreation = new EventEmitter<UserInfo>();

	/**
	 * Form for login
	 */
	form: FormGroup<LoginForm>;

	constructor(private readonly _fb: FormBuilder) { }

	ngOnInit(): void {
		this._initForm();
	}

	private _initForm(): void {
		this.form = this._fb.group<LoginForm>({
			username: this._fb.nonNullable.control<string>('', Validators.required),
			email: this._fb.nonNullable.control<string>('', Validators.required),
			password: this._fb.nonNullable.control<string>('', Validators.required)
		});
	}

	submitForm($event: any) {
		console.log(this.form);

		// if the form is invalid
		if (!this.form.valid) {
			return;
		}

		const formValues = {
			...this.form.value,
		} as UserInfo;

		console.log(this.form.valid);
		// this.accountCreation.emit(formValues);
	}
}
