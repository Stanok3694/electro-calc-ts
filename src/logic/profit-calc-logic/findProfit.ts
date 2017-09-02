import checkResult from './checkResult';
import findFinalResult from './findFinalResult';
import updateMonthState from './updateMonthState';
import printMedianResultsWithLabel from './printMedianResultsWithLabel';
import MonthState from '../profit-calc-entities/MonthState';

let finalResult: number = 0;
 
const findProfit = (month: MonthState, term: number):any => {
    
    let newMonth: MonthState = updateMonthState(month);
    let objectOfResults: object = newMonth.getResultView();

    if (term > 0) {
        finalResult = findFinalResult(finalResult, newMonth.increment);
        printMedianResultsWithLabel(term, objectOfResults); 
        return findProfit(newMonth, term-1); 
    } else { 
        return checkResult(finalResult); 
    }
}

export default findProfit;