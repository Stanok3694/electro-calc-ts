import Tarifs from '../electro-calc-entities/tarifs';
import SocialNorms from '../electro-calc-entities/socialNorms';
import PhaseType from '../electro-calc-entities/phaseType';
import findPayment from './findPayment';

const calculate = (phaseType: string, delta: number): any => {
    return {
        calculateUnderNormValue: calculateUnderNormValue(),
        calculateOverNormValue: calculateOverNormValue()
    }

    function calculateUnderNormValue(): any {
		if (phaseType === PhaseType.day) {
			 return findPayment(delta, Tarifs.dayUnderNorm);			
		}
		return findPayment(delta, Tarifs.nightUnderNorm);
    }
    
    function calculateOverNormValue(): any {
		if(phaseType === PhaseType.day)
			return findPayment(delta, Tarifs.dayOverNorm) + SocialNorms.constSocialNormDayPay;
		return findPayment(delta, Tarifs.nightOverNorm) + SocialNorms.constSocialNormNightPay;	
	}
}

export default calculate;