import checkResult from '../profit-calc-logic/checkResult';

class MonthState {
    increment: number;
    startAmount: number;
    finalStageAmount: number;

    constructor(i: number, sA: number, fSA: number){
        this.increment = i;
        this.startAmount = sA;

        if(!fSA){
            this.finalStageAmount = 0;
        
        }
        this.finalStageAmount  = fSA;
    }

    getResultView = (): object => {
        let objectOfResults: object = {
            percentageIncrem: checkResult(this.increment),
            amountIncrem: checkResult(this.startAmount),
            sumOnStageStart: checkResult(this.finalStageAmount)
        }
        return objectOfResults;
    }
}

export default MonthState;