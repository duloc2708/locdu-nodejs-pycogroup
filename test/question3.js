process.env.NODE_ENV = 'test';
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);
const totalBillDefault = 100
const Bill = require('../question3')
/// UNIT TEST QUESTION 3
describe('Test question 3', () => {
    beforeEach((done) => {
        done();
    });
    it('Test single return discount for employee', async () => {
        // PARAMS
        let listUser = [{ id: 1, "name": "Tom", "type": "IS_AN_EMPLOYEE" }];
        let listProduct = [{ id: 1, price: 100 }]

        // Run result
        const bill = new Bill();
        bill.createBill(listUser, listProduct)

        // Result compare
        let resultCompare = [{
            user: 'Tom',
            type: 'IS_AN_EMPLOYEE',
            totalDiscount: 35,
            totalMoneyPay: 65
        }]
        // excute test
        chai.expect(resultCompare).to.deep.equals(bill.getResult());
    });

    it('Test single return discount for affiliate', async () => {
        // PARAMS
        let listUser = [{ id: 2, "name": "Jery", "type": "IS_AN_AFFILIATE" }];
        let listProduct = [{ id: 2, price: 200 }]

        // Run result
        const bill = new Bill();
        bill.createBill(listUser, listProduct)

        // Result compare
        let resultCompare = [{
            user: 'Jery',
            type: 'IS_AN_AFFILIATE',
            totalDiscount: 30,
            totalMoneyPay: 170
        }]
        // excute test
        chai.expect(resultCompare).to.deep.equals(bill.getResult());
    });

    it('Test single return discount for customer over 2 years ', async () => {
        // PARAMS
        let listUser = [{ id: 2, "name": "Jery", "type": "IS_CUSTOMER_FOR_OVER_2_YEAS" }];
        let listProduct = [{ id: 2, price: 200 }]

        // Run result
        const bill = new Bill();
        bill.createBill(listUser, listProduct)

        // Result compare
        let resultCompare = [{
            user: 'Jery',
            type: 'IS_CUSTOMER_FOR_OVER_2_YEAS',
            totalDiscount: 20,
            totalMoneyPay: 180
        }]
        // excute test
        chai.expect(resultCompare).to.deep.equals(bill.getResult());
    });

    it('Test multiplies type user with sigle bill ', async () => {
        // PARAMS
        let listUser = [{ id: 1, "name": "Tom", "type": "IS_AN_EMPLOYEE" },
        { id: 2, "name": "Jery", "type": "IS_AN_AFFILIATE" },
        { id: 3, "name": "Other", "type": "IS_CUSTOMER_FOR_OVER_2_YEAS" }];
        let listProduct = [{ id: 1, price: 100 }]

        // Run result
        const bill = new Bill();
        bill.createBill(listUser, listProduct)

        // Result compare
        let resultCompare = [{
            user: 'Tom',
            type: 'IS_AN_EMPLOYEE',
            totalDiscount: 35,
            totalMoneyPay: 65
        },
        {
            user: 'Jery',
            type: 'IS_AN_AFFILIATE',
            totalDiscount: 15,
            totalMoneyPay: 85
        },
        {
            user: 'Other',
            type: 'IS_CUSTOMER_FOR_OVER_2_YEAS',
            totalDiscount: 10,
            totalMoneyPay: 90
        }]
        // excute test
        chai.expect(resultCompare).to.deep.equals(bill.getResult());
    });
    it('Test multiplies type user with multiplies bill ', async () => {
        // PARAMS
        let listUser = [{ id: 1, "name": "Tom", "type": "IS_AN_EMPLOYEE" },
        { id: 2, "name": "Jery", "type": "IS_AN_AFFILIATE" },
        { id: 3, "name": "Other", "type": "IS_CUSTOMER_FOR_OVER_2_YEAS" }];
        let listProduct = [{ id: 1, price: 100 }, { id: 2, price: 200 }]

        // Run result
        const bill = new Bill();
        bill.createBill(listUser, listProduct)

        // Result compare
        let resultCompare = [{
            user: 'Tom',
            type: 'IS_AN_EMPLOYEE',
            totalDiscount: 70,
            totalMoneyPay: 195
        },
        {
            user: 'Jery',
            type: 'IS_AN_AFFILIATE',
            totalDiscount: 30,
            totalMoneyPay: 255
        },
        {
            user: 'Other',
            type: 'IS_CUSTOMER_FOR_OVER_2_YEAS',
            totalDiscount: 20,
            totalMoneyPay: 270
        }]
        // excute test
        chai.expect(resultCompare).to.deep.equals(bill.getResult());
    });
});
