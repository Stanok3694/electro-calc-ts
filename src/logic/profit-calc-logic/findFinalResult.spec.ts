import findFinalResult from './findFinalResult';
import updateMonthState from './updateMonthState';
import MonthState from '../profit-calc-entities/MonthState';

describe('inner profit-calc functional -> findFinalResult-func unit', () => {
    let december = new MonthState(0, 300, 0);
    let januaryActual = updateMonthState(december);
    let finalResult: number = 0;
    let increment: number = januaryActual.increment - december.increment;

    it('should return correct final result <- 1500', () => {
        let actualFinalResult = findFinalResult(finalResult, increment);
        let expectedFinalResult = finalResult + increment;
        expect(actualFinalResult).toBe(expectedFinalResult);
    });
});