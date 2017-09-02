import MonthState from '../profit-calc-entities/MonthState';
import TechnicalPreValues from '../profit-calc-entities/TechnicalPreValues';

const updateMonthState = (monthState: MonthState): MonthState => {
    let newIncrem: number = monthState.startAmount * TechnicalPreValues.percentage;
    let newStartAmount: number = monthState.startAmount + newIncrem;
    let newFinalAmount: number = newStartAmount - TechnicalPreValues.decrement;

    return new MonthState(newIncrem, newStartAmount, newFinalAmount);
}

export default updateMonthState;