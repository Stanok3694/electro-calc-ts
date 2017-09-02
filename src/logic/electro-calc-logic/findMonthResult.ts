import findResult from './findResult';
import findPhaseMonthResult from './findPhaseMonthResult';
import Month from '../electro-calc-entities/Month';
import TopValueObject from '../electro-calc-entities/TopValueObject';
import PhaseType from '../electro-calc-entities/phaseType';

const findMonthResult = (currentMonth: Month, previousMonth: Month):number => {

    let dayTopValueObject = new TopValueObject(currentMonth.dayTop, previousMonth.dayTop);
    let nightTopValueObject = new TopValueObject(currentMonth.nightTop, previousMonth.nightTop);
    
    let dayMonthResult: number = findPhaseMonthResult(dayTopValueObject, PhaseType.day);
    let nightMonthResult: void = findPhaseMonthResult(nightTopValueObject, PhaseType.night);
    
    const monthResult: number = findResult(dayMonthResult, nightMonthResult);    
    return monthResult;
}

export default findMonthResult;