import findDelta from './findDelta';
import findResult from './findResult';
import findPayment from './findPayment';


import Tarifs from './tarifs';
import PhaseType from './phaseType';
import TopValueObject from './topValueObject';
import SocialNorms from './socialNorms';

const findPhaseMonthResult = (phaseTopValueObject: TopValueObject, phaseType: string): void => {
	
	const thisMonthDelta: number = findDelta(phaseTopValueObject.currentMonthTopValue, phaseTopValueObject.previousMonthTopValue);
	const thisMonthOverNormDelta: number = findDelta(thisMonthDelta, SocialNorms.day);
	
	if (thisMonthOverNormDelta <= 0) {
		calculateUnderNormValue();
	}
	calculateOverNormValue();

	function calculateUnderNormValue(): number {
		if (phaseType === PhaseType.day) {
			return thisMonthDelta * Tarifs.dayUnderNorm;		
		}
		return thisMonthDelta * Tarifs.nightUnderNorm;
	}

	function calculateOverNormValue(): void {
		const constSocialNormDayPay: number = findPayment(SocialNorms.day, Tarifs.dayUnderNorm);
		const constSocialNormNightPay: number = findPayment(SocialNorms.night, Tarifs.nightUnderNorm);
		
		if (phaseType === PhaseType.day) {
			calculateOverDayNormValue(constSocialNormDayPay);
		}
		calculateOverNightNormValue(constSocialNormNightPay);
		
		
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

export default findPhaseMonthResult;