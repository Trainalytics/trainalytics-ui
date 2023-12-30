import { ActivityDto } from '@models/activity/activity-dto.model';

export const activityDtoMock: ActivityDto = {
	id: '1',
	name: 'VMA-S5-2-Endurance Fontamentale',
	type: 'running',
	averageHr: 135,
	averagePace: '5:30',
	distance: 10.5,
	duration: '1:10:35',
	allHr: generateFakeHr(160),
	allPace: []
};

function generateFakeHr(numberOfHr: number): Array<number> {

	const hrMin = 70;
	const hrMax = 165;
	let hrData = [];

	for (let i = 0; i < numberOfHr; i++) {
		hrData[i] = Math.floor(Math.random() * (hrMax - hrMin)) + hrMin;
	}

	return hrData;
}
