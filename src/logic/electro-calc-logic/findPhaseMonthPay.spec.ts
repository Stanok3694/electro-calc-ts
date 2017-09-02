import findDelta from './findDelta';
import calculate from './calculateService';
import TopValueObject from '../electro-calc-entities/TopValueObject';
import SocialNorms from '../electro-calc-entities/socialNorms';
import PhaseType from '../electro-calc-entities/phaseType';

describe('Day over norm case: ', () => {	
	const topDayValueObject = new TopValueObject(2414, 2342);
	const dayMonthDelta = findDelta(topDayValueObject.currentMonthTopValue, topDayValueObject.previousMonthTopValue);

	let thisMonthOverDayNormDeltaPay: number = findDelta(dayMonthDelta, SocialNorms.day);
	let dayPayResult = calculate(PhaseType.day, thisMonthOverDayNormDeltaPay).calculateOverNorm;
	
	it('should calculate day phase correct <- 307.26', () => {
		expect(dayPayResult).toBe(307.26);
	});
});

describe('Night over norm case: ', () => {
	const topNightValueObject = new TopValueObject(1660, 1625);
	const nightMonthDelta = findDelta(topNightValueObject.currentMonthTopValue, topNightValueObject.previousMonthTopValue);

	let thisMonthOverNightNormDeltaPay: number = findDelta(nightMonthDelta, SocialNorms.night);
	let nightPayResult = calculate(PhaseType.night, thisMonthOverNightNormDeltaPay).calculateOverNorm;
	
	it('should calculate night phase correct <- 74.13', () => {
		expect(nightPayResult).toBe(74.13);
	});
});