import { ActivityDto } from '@models/activity/activity-dto.model';

export const activityDtoMock: ActivityDto = {
	id: '1',
	name: 'VMA-S5-2-Endurance Fontamentale',
	type: 'running',
	averageHr: 135,
	averagePace: '5:30',
	distance: 10.5,
	duration: '1:10:35',
	allHr: generateFakeHeartRateData(1000),
	allPace: generateFakePaceData(),
};

function generateFakeHeartRateData(numberOfheartRate: number): Array<number> {
	const heartRateMin = 70;
	const heartRateMax = 165;
	let heartRateData = [];

	for (let i = 0; i < numberOfheartRate; i++) {
		heartRateData[i] = Math.floor(Math.random() * (heartRateMax - heartRateMin)) + heartRateMin;
	}

	return heartRateData;
}

function generateFakePaceData(): Array<number> {
	const paceMin = 4.0;
	const paceMax = 6.0;
	let paceData = [];

	for (let i = 0; i < 160; i++) {
		paceData[i] = parseFloat((Math.random() * (paceMax - paceMin) + paceMin).toFixed(2));
	}

	return paceData;
}
