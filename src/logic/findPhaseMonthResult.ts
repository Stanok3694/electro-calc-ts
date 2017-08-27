import findDelta from './findDelta';
import findPayment from './findPayment';
import calculate from './calculate';

import Tarifs from './tarifs';
import PhaseType from './phaseType';
import SocialNorms from './socialNorms';
import TopValueObject from './TopValueObject';

const findPhaseMonthResult = (phaseTopValueObject: TopValueObject, phaseType: string): any => {
	const thisMonthDelta: number = findDelta(phaseTopValueObject.currentMonthTopValue, phaseTopValueObject.previousMonthTopValue);
	const thisMonthOverNormDelta: number = findOverNormDelta(thisMonthDelta, phaseType);

	if (thisMonthOverNormDelta <= 0) {
		return calculateUnderNormValue();
	}
	return calculateOverNormValue();

	function calculateUnderNormValue(): number {
		if (phaseType === PhaseType.day) {
			 return findPayment(thisMonthDelta, Tarifs.dayUnderNorm);			
		}
		return findPayment(thisMonthDelta, Tarifs.nightUnderNorm);
	}

	function calculateOverNormValue(): number {
		const constSocialNormDayPay: number = findPayment(SocialNorms.day, Tarifs.dayUnderNorm);
		const constSocialNormNightPay: number = findPayment(SocialNorms.night, Tarifs.nightUnderNorm);

		if (phaseType === PhaseType.day) {
			return calculate(constSocialNormDayPay, thisMonthOverNormDelta).overDayNorm;
		}
		return calculate(constSocialNormNightPay, thisMonthOverNormDelta).overNightNorm;
	}

	function findOverNormDelta(thisMonthDelta: number, phaseType: string): number {
		if(phaseType === PhaseType.day){
			return findDelta(thisMonthDelta, SocialNorms.day);
		}
		return findDelta(thisMonthDelta, SocialNorms.night);
	}
}

export default findPhaseMonthResult;