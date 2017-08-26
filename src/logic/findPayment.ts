const findPayment = (thisMonthValue: number, tarif: number): number => {
    return thisMonthValue * tarif;
}

export default findPayment;