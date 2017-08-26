import findResult from './findResult';
import findPhaseMonthResult from './findPhaseMonthResult';
import Month from './Month';
import PhaseType from './phaseType';
import TopValueObject from './TopValueObject';

const findMonthResult = (currentMonth: Month, previousMonth: Month):number => {

    let dayTopValueObject = new TopValueObject(currentMonth.dayTop, previousMonth.dayTop);
    let nightTopValueObject = new TopValueObject(currentMonth.nightTop, previousMonth.nightTop);

    let dayMonthResult: void = findPhaseMonthResult(dayTopValueObject, PhaseType.day);
    let nightMonthResult: void = findPhaseMonthResult(nightTopValueObject, PhaseType.night);
    
    return findResult(dayMonthResult, nightMonthResult); 
}

export default findMonthResult;