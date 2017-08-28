import findDelta from '../logic/findDelta';
import findPayment from '../logic/findPayment';
import calculate from '../logic/calculate';
import TopValueObject from '../logic/TopValueObject';
import Tarifs from '../logic/tarifs';
import SocialNorms from '../logic/socialNorms';

describe('Day over norm case: ', () => {
	const constSocialNormDayPay: number = findPayment(SocialNorms.day, Tarifs.dayUnderNorm);
	const topDayValueObject = new TopValueObject(2414, 2342);
	const dayMonthDelta = findDelta(topDayValueObject.currentMonthTopValue, topDayValueObject.previousMonthTopValue);

	let thisMonthOverDayNormDeltaPay: number = findDelta(dayMonthDelta, SocialNorms.day);
	let dayPayResult = calculate(constSocialNormDayPay, thisMonthOverDayNormDeltaPay).overDayNorm;
	it('should calculate day phase correct <- 307.26', () => {
		expect(dayPayResult).toBe(307.26);
	});
});

describe('Night over norm case: ', () => {
	const constSocialNormNightPay: number = findPayment(SocialNorms.night, Tarifs.nightUnderNorm);
	const topNightValueObject = new TopValueObject(1660, 1625);
	const nightMonthDelta = findDelta(topNightValueObject.currentMonthTopValue, topNightValueObject.previousMonthTopValue);

	let thisMonthOverNightNormDeltaPay: number = findDelta(nightMonthDelta, SocialNorms.night);
	let nightPayResult = calculate(constSocialNormNightPay, thisMonthOverNightNormDeltaPay).overNightNorm;
	it('should calculate night phase correct <- 74.13', () => {
		expect(nightPayResult).toBe(74.13);
	});
});
