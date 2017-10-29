import findDelta from './findDelta';
import findPayment from './findPayment';
import SocialNorms from '../electro-calc-entities/socialNorms'
import Tarifs from '../electro-calc-entities/tarifs';

describe('inner functional test => payment-func unit-test', () => {
	const thisMonthDelta: number = findDelta(2600, 2496);
	const thisMonthOverNormDelta: number = findDelta(thisMonthDelta, SocialNorms.day);    
    const constSocialNormDayPay: number = findPayment(SocialNorms.day, Tarifs.dayUnderNorm);

    it('should calculate social norm day payment <- 153.94', () => {
        expect(constSocialNormDayPay).toBe(153.94);
    });

    const thisMonthOverDayNormDeltaPay: number = findPayment(thisMonthOverNormDelta, Tarifs.dayOverNorm);

    it('should calculate over social norm day value <- 419.68', () => {
        expect(thisMonthOverDayNormDeltaPay).toBe(419.68);
    });
});