import findDelta from './findDelta';
import findResult from './findResult';
import findPayment from './findPayment';

import SocialNorms from '../electro-calc-entities/socialNorms'
import Tarifs from '../electro-calc-entities/tarifs';

describe('electricity payments inner functional OVER DAY NORM calculation', () => {
	let thisMonthDelta: number = findDelta(2414, 2342);
	let thisMonthOverNormDelta: number = findDelta(thisMonthDelta, SocialNorms.day);

	let constSocialNormDayPay: number = findPayment(SocialNorms.day, Tarifs.dayUnderNorm);
	let thisMonthOverDayNormDeltaPay: number = findPayment(thisMonthOverNormDelta, Tarifs.dayOverNorm);
	let thisMonthDayFinalPay: number = findResult(thisMonthOverDayNormDeltaPay, constSocialNormDayPay);

	it('should return correct final day payment result', () => {
		expect(thisMonthDayFinalPay).toBe(307.26);
	});
});