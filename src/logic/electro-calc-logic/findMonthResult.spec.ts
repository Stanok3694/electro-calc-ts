import findMonthResult from './findMonthResult'
import Month from '../electro-calc-entities/Month';

describe('Full result over norm: ', () => {
	const august = new Month(2496, 1701);
	const september = new Month(2600, 1802);
	const result: number = findMonthResult(september, august);
	
	it('should calculate all cycle <- 858.93', () => {
		expect(result).toBe(858.93);
	});
});
