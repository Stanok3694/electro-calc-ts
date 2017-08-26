class TopValueObject {
    currentMonthTopValue: number;
    previousMonthTopValue: number;

    constructor(current: number, previous: number) {
        this.currentMonthTopValue = current;
        this.previousMonthTopValue = previous;
    }
}

export default TopValueObject;