const checkResult = (value: number): string => {
    let preResult = value * 1000;
    return preResult.toFixed(2);
}
export default checkResult;