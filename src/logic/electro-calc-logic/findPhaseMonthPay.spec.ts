import findDelta from './findDelta';
import calculate from './calculateService';
import TopValueObject from '../electro-calc-entities/TopValueObject';
import SocialNorms from '../electro-calc-entities/socialNorms';
import PhaseType from '../electro-calc-entities/phaseType';

describe('Day over norm case: ', () => {	
	const topValues = new TopValueObject(2600, 2496);
	const monthDelta = findDelta(topValues.currentMonthTopValue, topValues.previousMonthTopValue);
	const overNormPay: number = findDelta(monthDelta, SocialNorms.day);
	const result = calculate.calculateOverNormValue(PhaseType.day, overNormPay);
	
	it('should calculate day phase <- 419.68', () => {
		expect(result).toBe(573.62);
	});
});

describe('Night over norm case: ', () => {
	const topValues = new TopValueObject(1802, 1701);
	const monthsDelta = findDelta(topValues.currentMonthTopValue, topValues.previousMonthTopValue);
	const overNormPay: number = findDelta(monthsDelta, SocialNorms.night);
	const result = calculate.calculateOverNormValue(PhaseType.night, overNormPay);

	it('should calculate night phase <- 211.81', () => {
		expect(result).toBe(285.31);
	});
});