import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiyCardComponent } from './activitiy-card.component';

describe('ActivitiyCardComponent', () => {
	let component: ActivitiyCardComponent;
	let fixture: ComponentFixture<ActivitiyCardComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ActivitiyCardComponent]
		})
			.compileComponents();

		fixture = TestBed.createComponent(ActivitiyCardComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
