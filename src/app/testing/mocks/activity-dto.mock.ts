import { ActivityDto } from '@models/activity/activity-dto.model';

export const activityDtoMock: ActivityDto = {
	id: '1',
	name: 'VMA-S5-2-Endurance Fontamentale',
	type: 'running',
	hrData: {
		averageHr: 130,
		maxHr: 165,
		allHr: generateFakeHeartRateData(1000),
	},
	paceData: {
		averagePace: '5:30',
		maxPace: '3:45',
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
	calories: 650,
	lapsArray: [
		{
			number: 1,
			distance: 1.00,
			time: '5:28',
			pace: '5:28',
		},
		{
			number: 2,
			distance: 1.00,
			time: '5:27',
			pace: '5:27',
		},
		{
			number: 3,
			distance: 1.00,
			time: '5:29',
			pace: '5:29',
		},
		{
			number: 4,
			distance: 1.00,
			time: '5:25',
			pace: '5:25',
		},
		{
			number: 5,
			distance: 1.00,
			time: '5:20',
			pace: '5:20',
		},
		{
			number: 6,
			distance: 1.00,
			time: '5:24',
			pace: '5:24',
		},
	]
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
