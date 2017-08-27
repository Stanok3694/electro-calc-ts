import findDelta from '../logic/findDelta';
import findResult from '../logic/findResult';
import findPayment from '../logic/findPayment';

import Tarifs from '../logic/tarifs';
import SocialNorms from '../logic/socialNorms';

describe('electricity payments inner functional OVER DAY NORM calculation', () => {
	let thisMonthDelta: number = findDelta(2414, 2342);

	it('should return correct delta btw months', () => {
		expect(thisMonthDelta).toBe(72);  
	});

	let thisMonthOverNormDelta: number = findDelta(thisMonthDelta, SocialNorms.day);

	it("should return correct delta btw month's delta and social norm", () => {
		expect(thisMonthOverNormDelta).toBe(15);
	});
	
	let constSocialNormDayPay: number = findPayment(SocialNorms.day, Tarifs.dayUnderNorm);

	it('should calculate const social norm day value correct', () => {
		expect(constSocialNormDayPay).toBe(204.06);
	});

	let thisMonthOverDayNormDeltaPay: number = findPayment(thisMonthOverNormDelta, Tarifs.dayOverNorm);

	it('should calculate over social norm day value correct', () => {
		expect(thisMonthOverDayNormDeltaPay).toBe(103.20);
	});

	let thisMonthDayFinalPay: number = findResult(thisMonthOverDayNormDeltaPay, constSocialNormDayPay);

	it('should return correct final day payment result', () => {
		expect(thisMonthDayFinalPay).toBe(307.26);
	});
});