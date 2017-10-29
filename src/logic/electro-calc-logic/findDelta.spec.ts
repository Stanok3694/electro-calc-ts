import findDelta from './findDelta';
import SocialNorms from '../electro-calc-entities/socialNorms'

describe('inner functional test => delta-func unit-test', () => {
	const monthsDelta: number = findDelta(2600, 2496);
	const thisMonthOverNormDelta: number = findDelta(monthsDelta, SocialNorms.day);

	it('should return correct delta btw months', () => {
		expect(monthsDelta).toBe(104);  
	});


	it("should return correct delta btw month's delta and social norm", () => {
		expect(thisMonthOverNormDelta).toBe(61);
    });
});