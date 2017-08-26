import findDelta from './logic/findDelta';
import findResult from './logic/findResult';
import findPayment from './logic/findPayment';


import socialNorms from './logic/socialNorms';
import tarifs from './logic/tarifs';

describe('electricity payments OVER DAY NORM calculation', () => {

  let thisMonthDelta: number = findDelta(2160, 2034);
  let thisMonthOverNormDelta: number = findDelta(thisMonthDelta, socialNorms.day);
  let constSocialNormDayPay: number = findPayment(socialNorms.day, tarifs.dayUnderNorm);
  let thisMonthOverDayNormDeltaPay: number = findPayment(thisMonthOverNormDelta, tarifs.dayOverNorm);
  let thisMonthDayFinalPay: number = findResult(thisMonthOverDayNormDeltaPay, constSocialNormDayPay);

  it('should return correct delta btw months', () => {
    expect(thisMonthDelta).toBe(126);  
  });

  it("should return correct delta btw month's delta and social norm", () => {
    expect(thisMonthOverNormDelta).toBe(73);
  });

  it('should calculate const social norm day value correct', () => {
    expect(constSocialNormDayPay).toBe(189.74);
  });

  it('should calculate over social norm day value correct', () => {
    expect(thisMonthOverDayNormDeltaPay).toBe(502.24);
  });

  it('should return correct final day payment result', () => {
    expect(thisMonthDayFinalPay).toBe(691.98);
  });
});