// funny test (:
import monthLabel from './monthLabel';

describe('inner profit-calc functional -> most valuable test (not)', () => {
    let month: number = 12;
    let label: number = monthLabel(month);
    
    it('should be very correct <- 1 (oh, awesome!)', () => {
        expect(label).toBe(1);
    });
});