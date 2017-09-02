import findProfit from './findProfit';
import MonthState from '../profit-calc-entities/MonthState';

let term:number = 12;
let startMonth = new MonthState(0,300,0);
let result: number = findProfit(startMonth, term);

console.log(result);