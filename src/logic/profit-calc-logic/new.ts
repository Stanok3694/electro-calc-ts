import findProfit from './findProfit';
import SuperPuper from './SuperPuper';

let superPuper = new SuperPuper(300, 12);
let result: number = findProfit(superPuper.amount, superPuper.months);

console.log(result);