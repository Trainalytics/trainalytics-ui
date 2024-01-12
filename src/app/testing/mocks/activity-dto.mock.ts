import { ActivityDto } from '@models/activity/activity-dto.model';

export const activityDtoMock: ActivityDto = {
	id: '1',
	name: 'VMA-S5-2-Endurance Fontamentale',
	type: 'running',
	hrData: {
		averageHr: 130,
		maxHr: 0,
		allHr: generateFakeHeartRateData(1000),
	},
	paceData: {
		averagePace: '5:30',
		maxPace: '',
		averageSpeed: 0,
		maxSpeed: 0,
		allPace: generateFakePaceData(),
	},
	elevationData: {
		totalAscent: 132.8,
		totalDescent: 139,
		minElevation: 700,
		maxElevation: 780,
		allElevation: generateFakeElevation(),
	},
	distance: 10.5,
	duration: '1:10:35',
};

function generateFakeHeartRateData(numberOfheartRate: number): Array<number> {
	const heartRateMin = 110;
	const heartRateMax = 165;
	let heartRateData = [];

	for (let i = 0; i < numberOfheartRate; i++) {
		heartRateData[i] = Math.floor(Math.random() * (heartRateMax - heartRateMin)) + heartRateMin;
	}

	return heartRateData;
}

function generateFakePaceData(): Array<number> {
	const minPace = 4.0;
	const maxPace = 6.0;
	let paceData = [];

	for (let i = 0; i < 160; i++) {
		paceData[i] = parseFloat((Math.random() * (maxPace - minPace) + minPace).toFixed(2));
	}

	return paceData;
}

function generateFakeElevation(): Array<number> {
	const minElevation = 700;
	const maxElevation = 780;
	let elevationData = [];

	for (let i = 0; i < 160; i++) {
		elevationData[i] = parseFloat((Math.random() * (maxElevation - minElevation) + minElevation).toFixed(2));
	}

	return elevationData;
}
