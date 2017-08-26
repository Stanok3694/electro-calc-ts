import findDelta from './findDelta';
import findPayment from './findPayment';
import calculate from './calculate';

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
			calculate(constSocialNormDayPay, thisMonthOverNormDelta).overDayNorm;
		}
		calculate(constSocialNormNightPay, thisMonthOverNormDelta).overNightNorm;		
	}

}

export default findPhaseMonthResult;