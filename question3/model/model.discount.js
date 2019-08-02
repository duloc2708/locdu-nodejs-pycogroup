class Discount {
    constructor(percentDiscount, totalOrder) {
        this._percentDiscount = percentDiscount;
        this._totalOrder = totalOrder;
        this._totalPayment = 0;
    }
    set totalPayment(newTotaPay) {
        this._totalPayment = newTotaPay;
    }

    get totalPayment() {
        return this._totalPayment;
    }
    calculate() {
        this._totalPayment = this._totalOrder - (this._totalOrder * (this._percentDiscount / 100));
    }
}

module.exports = Discount;