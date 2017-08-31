import findDelta from './findDelta';
import findPayment from './findPayment';
import calculate from './calculate';

import TopValueObject from '../electro-calc-entities/TopValueObject';
import Tarifs from '../electro-calc-entities/tarifs';
import SocialNorms from '../electro-calc-entities/socialNorms';
import PhaseType from '../electro-calc-entities/phaseType';

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