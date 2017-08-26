import findDelta from './logic/findDelta';
import findResult from './logic/findResult';
import findPayment from './logic/findPayment';
import calculate from './logic/calculate';
import PhaseType from './logic/phaseType';
import TopValueObject from './logic/TopValueObject';
import Tarifs from './logic/tarifs';
import SocialNorms from './logic/socialNorms';

describe('electricity payments inner functional OVER DAY NORM calculation', () => {
	let thisMonthDelta: number = findDelta(2160, 2034);

	it('should return correct delta btw months', () => {
		expect(thisMonthDelta).toBe(126);  
	});

	let thisMonthOverNormDelta: number = findDelta(thisMonthDelta, SocialNorms.day);
	
	it("should return correct delta btw month's delta and social norm", () => {
		expect(thisMonthOverNormDelta).toBe(73);
	});
	
	let constSocialNormDayPay: number = findPayment(SocialNorms.day, Tarifs.dayUnderNorm);

	it('should calculate const social norm day value correct', () => {
		expect(constSocialNormDayPay).toBe(189.74);
	});

	let thisMonthOverDayNormDeltaPay: number = findPayment(thisMonthOverNormDelta, Tarifs.dayOverNorm);

	it('should calculate over social norm day value correct', () => {
		expect(thisMonthOverDayNormDeltaPay).toBe(502.24);
	});

	let thisMonthDayFinalPay: number = findResult(thisMonthOverDayNormDeltaPay, constSocialNormDayPay);

	it('should return correct final day payment result', () => {
		expect(thisMonthDayFinalPay).toBe(691.98);
	});
});

describe('new functional of electricity payments', () => {
	const constSocialNormDayPay: number = findPayment(SocialNorms.day, Tarifs.dayUnderNorm);
	const topDayValueObject = new TopValueObject(2160, 2034);
	const dayMonthDelta = findDelta(topDayValueObject.currentMonthTopValue, topDayValueObject.previousMonthTopValue);

	let thisMonthOverDayNormDeltaPay: number = findDelta(dayMonthDelta, SocialNorms.day);
	console.log(thisMonthOverDayNormDeltaPay);
	
	let dayPayResult = calculate(constSocialNormDayPay, thisMonthOverDayNormDeltaPay).overDayNorm;
	it('should calculate day phase correct <- 691.98', () => {
		expect(dayPayResult).toBe(691.98);
	});	
});