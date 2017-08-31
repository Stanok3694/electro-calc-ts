import checkResult from './checkResult';
import monthLabel from './monthLabel';
import TechnicalPreValues from './technicalPreValues';

let percentageFinalResult: number = 0; 

const findProfit = (amount: number, months: number):any => {
    let increment: number = amount * TechnicalPreValues.percentage;
    let newAmount: number = amount+increment;
    let finalStageAmount: number = newAmount - 25;

    let objectOfResults: object = {
        percentageIncrem: checkResult(increment),
        amountIncrem: checkResult(newAmount),
        sumOnStageStart: checkResult(finalStageAmount)
    }

    if (months > 0) {
        percentageFinalResult = percentageFinalResult + increment;
        console.log(monthLabel(months));
        console.log(objectOfResults); 
        return findProfit(finalStageAmount, months-1); 
    } else { 
        return checkResult(percentageFinalResult); 
    }
}

export default findProfit;