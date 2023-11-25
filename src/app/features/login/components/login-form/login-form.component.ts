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
	loginCreation = new EventEmitter<UserInfo>();

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

		const formValues = {
			...this.form.value,
		} as UserInfo;

		// this.loginCreation.emit(formValues);
	}
}
