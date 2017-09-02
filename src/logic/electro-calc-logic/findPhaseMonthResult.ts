import findDelta from './findDelta';
import findPayment from './findPayment';
import calculate from './calculateService';
import TopValueObject from '../electro-calc-entities/TopValueObject';
import SocialNorms from '../electro-calc-entities/socialNorms';
import PhaseType from '../electro-calc-entities/phaseType';

const findPhaseMonthResult = (phaseTopValueObject: TopValueObject, phaseType: string): any => {
	const thisMonthDelta: number = findDelta(phaseTopValueObject.currentMonthTopValue, phaseTopValueObject.previousMonthTopValue);
	const thisMonthOverNormDelta: number = findOverNormDelta(thisMonthDelta, phaseType);

	if (thisMonthOverNormDelta <= 0) {
		return calculate(phaseType, thisMonthDelta).calculateUnderNormValue;
	}
	return calculate(phaseType, thisMonthOverNormDelta).calculateOverNormValue;

	function findOverNormDelta(thisMonthDelta: number, phaseType: string): number {
		if(phaseType === PhaseType.day){
			return findDelta(thisMonthDelta, SocialNorms.day);
		}
		return findDelta(thisMonthDelta, SocialNorms.night);
	}
}

export default findPhaseMonthResult;