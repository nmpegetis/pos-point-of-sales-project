let paymentId = 0;

export const createPayment = (amount, cardNumber, cardBrand, expMonth, expYear, cardHolder, cvv) => {
    return {
        type: "CREATE_PAYMENT",
        id: paymentId++,
        status: "authorized",
        amount,
        cardNumber,
        cardBrand,
        expMonth,
        expYear,
        cardHolder,
        cvv
    }
}