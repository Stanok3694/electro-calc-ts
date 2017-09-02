import MonthState from '../profit-calc-entities/MonthState';
import updateMonthState from './updateMonthState';

describe('inner profit functional -> updateMonthState-func unit', () => {
    let december = new MonthState(0, 300, 0);
    let januaryExpected = new MonthState(1.5, 301.5, 276.5);
    let januaryActual = updateMonthState(december);

    it('should be the instance of MonthState class', () => {
        expect(januaryActual).toBeInstanceOf(MonthState);
    });

    it('should return new month state correct <- 1.5, 301.5, 276.5', () => {
        let editedJanuaryActual: string = JSON.stringify(januaryActual);
        let editedJanuaryExpected: string = JSON.stringify(januaryExpected);
        expect(editedJanuaryActual).toEqual(editedJanuaryExpected);
    });
});