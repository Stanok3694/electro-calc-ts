import findDelta from './findDelta';
import findPayment from './findPayment';

import SocialNorms from '../electro-calc-entities/socialNorms'
import Tarifs from '../electro-calc-entities/tarifs';

describe('inner functional test => payment-func unit-test', () => {
	let thisMonthDelta: number = findDelta(2414, 2342);
	let thisMonthOverNormDelta: number = findDelta(thisMonthDelta, SocialNorms.day);
        
    let constSocialNormDayPay: number = findPayment(SocialNorms.day, Tarifs.dayUnderNorm);

    it('should calculate const social norm day value correct', () => {
        expect(constSocialNormDayPay).toBe(204.06);
    });

    let thisMonthOverDayNormDeltaPay: number = findPayment(thisMonthOverNormDelta, Tarifs.dayOverNorm);

    it('should calculate over social norm day value correct', () => {
        expect(thisMonthOverDayNormDeltaPay).toBe(103.20);
    });
});
