import findMonthResult from '../logic/findMonthResult'
import Month from '../logic/Month'

describe('Full result over norm: ', () => {
	const june = new Month(2342, 1625);
	const jule = new Month(2414, 1660);

	let resultPayment: number = findMonthResult(jule, june);
	it('should calculate all cycle correct <- 381.39', () => {
		expect(resultPayment).toBe(381.39);
	});
});
