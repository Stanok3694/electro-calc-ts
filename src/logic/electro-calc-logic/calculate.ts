import findResult from './findResult';
import findPayment from './findPayment';
import Tarifs from '../electro-calc-entities/tarifs';

const calculate = (constSocialNormPhasePay: number, thisMonthOverNormDelta: number):any  => {
    return {
        overDayNorm: calculateOverDayNormValue(constSocialNormPhasePay),
        overNightNorm: calculateOverNightNormValue(constSocialNormPhasePay)
    }

    function calculateOverDayNormValue(constSocialNormDayPay: number): number {
		let thisMonthOverDayNormDeltaPay: number = findPayment(thisMonthOverNormDelta, Tarifs.dayOverNorm);
		let thisMonthDayFinalPay: number = findResult(thisMonthOverDayNormDeltaPay, constSocialNormDayPay);
		return thisMonthDayFinalPay;
	}

	function calculateOverNightNormValue(constSocialNormNightPay: number): number {
		let thisMonthOverNightNormDeltaPay: number = findPayment(thisMonthOverNormDelta, Tarifs.nightOverNorm);
		let thisMonthNightFinalPay: number = findResult(thisMonthOverNightNormDeltaPay, constSocialNormNightPay);
		return thisMonthNightFinalPay;	
	}
}

export default calculate;