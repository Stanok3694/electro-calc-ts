import findResult from './findResult';
import findPhaseMonthResult from './findPhaseMonthResult';
import Month from '../electro-calc-entities/Month';
import TopValueObject from '../electro-calc-entities/TopValueObject';
import PhaseType from '../electro-calc-entities/phaseType';

const findMonthResult = (currentMonth: Month, previousMonth: Month):number => {
    const dayTopValues = new TopValueObject(currentMonth.dayTop, previousMonth.dayTop);
    const nightTopValues = new TopValueObject(currentMonth.nightTop, previousMonth.nightTop);
    const dayMonthResult: number = findPhaseMonthResult(dayTopValues, PhaseType.day);
    const nightMonthResult: void = findPhaseMonthResult(nightTopValues, PhaseType.night);
    const monthResult: number = findResult(dayMonthResult, nightMonthResult);
    const formattedResult: number = monthResult*100/100; // TODO: should find a more prettier way to round float...  
    return formattedResult;
}

export default findMonthResult;