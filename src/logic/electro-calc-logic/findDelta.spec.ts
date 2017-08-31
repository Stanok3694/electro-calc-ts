import findDelta from './findDelta';
import SocialNorms from '../electro-calc-entities/socialNorms'

describe('inner functional test => delta-func unit-test', () => {
	let thisMonthDelta: number = findDelta(2414, 2342);

	it('should return correct delta btw months', () => {
		expect(thisMonthDelta).toBe(72);  
	});

	let thisMonthOverNormDelta: number = findDelta(thisMonthDelta, SocialNorms.day);

	it("should return correct delta btw month's delta and social norm", () => {
		expect(thisMonthOverNormDelta).toBe(15);
    });
});