const Discount = require('../model/model.discount.js');
const DISCOUNT_BILL_ON_100 = 5;
const discountPrice = {
    IS_AN_EMPLOYEE: 30,
    IS_AN_AFFILIATE: 10,
    IS_CUSTOMER_FOR_OVER_2_YEAS: 5,
    ON_GROCERIES: 0
}
const calculateResult = ((discountType, totalBill) => {
    let totalAmount = totalBill;
    // calculate for percentage discount
    const percentageDiscount = new Discount(discountPrice[discountType], totalBill);
    percentageDiscount.calculate();
    totalAmount = percentageDiscount.totalPayment;
    // calculate for every $100 on bill
    if (totalAmount > 100 && discountType != 'ON_GROCERIES') {
        const specialDiscount = new Discount(DISCOUNT_BILL_ON_100, totalAmount);
        // call calculate again
        specialDiscount.calculate();
        totalAmount = specialDiscount.totalPayment;
    }
    return totalAmount;
});
module.exports = {
    calculateResult: calculateResult
}