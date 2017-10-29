import findDelta from './findDelta';
import findResult from './findResult';
import findPayment from './findPayment';
import SocialNorms from '../electro-calc-entities/socialNorms'
import Tarifs from '../electro-calc-entities/tarifs';

describe('electricity payments final day pay', () => {
	const monthsDelta: number = findDelta(2600, 2496);
	const monthOverNormDelta: number = findDelta(monthsDelta, SocialNorms.day);
	const constSocialNormDayPay: number = findPayment(SocialNorms.day, Tarifs.dayUnderNorm);
	const dayOverNormPay: number = findPayment(monthOverNormDelta, Tarifs.dayOverNorm);
	const monthDayFinalPay: number = findResult(dayOverNormPay, constSocialNormDayPay);

	it('should calculate final day payment result', () => {
		expect(monthDayFinalPay).toBe(573.62);
	});
});