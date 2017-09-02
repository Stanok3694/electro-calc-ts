import monthLabel from './monthLabel';

const printMedianResultsWithStageLabel = (months: number, objectOfResults: object): void => {
    console.log(monthLabel(months));
    console.log(objectOfResults);
}
export default printMedianResultsWithStageLabel;