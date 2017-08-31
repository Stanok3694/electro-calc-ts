import checkResult from './checkResult';

describe('inner profit functional -> checkResult-func unit', () => {
    let value: number = 1.13886689;
    let checkedResult: string = checkResult(value);

    it('should return correct result <- 1138.87', () =>{
        expect(checkedResult).toBe("1138.87");
    });
});