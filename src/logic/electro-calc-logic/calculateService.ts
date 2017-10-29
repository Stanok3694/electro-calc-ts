import Tarifs from '../electro-calc-entities/tarifs';
import SocialNorms from '../electro-calc-entities/socialNorms';
import PhaseType from '../electro-calc-entities/phaseType';
import findPayment from './findPayment';

const calculate = {
    calculateUnderNormValue: (phaseType: string, delta: number): any => {
			if (phaseType === PhaseType.day) {
				 return findPayment(delta, Tarifs.dayUnderNorm);			
			}
			return findPayment(delta, Tarifs.nightUnderNorm);
    },    
  	calculateOverNormValue: (phaseType: string, delta: number): any => {
			if(phaseType === PhaseType.day) {
				const result = findPayment(delta, Tarifs.dayOverNorm) + SocialNorms.constSocialNormDayPay;
				return result;
			}
			return findPayment(delta, Tarifs.nightOverNorm) + SocialNorms.constSocialNormNightPay;	
		}
}

export default calculate;