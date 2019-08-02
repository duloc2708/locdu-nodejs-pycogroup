process.env.NODE_ENV = 'test';
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);
const resultQ3 = require('../question3/controller')
const totalBillDefault = 100

/// UNIT TEST QUESTION 3
describe('Test question 3', () => {
    beforeEach((done) => {
        done();
    });
    describe('Test Employee', () => {
        it('should return object successfully', () => {
            const resultFromStore = resultQ3.calculatorBill('IS_AN_EMPLOYEE', totalBillDefault)
            const resultCompare = 70
            chai.expect(resultCompare).is.equals(resultFromStore);
        });
    });
    describe('Test Affiliate', () => {
        it('should return object successfully', () => {
            const resultFromStore = resultQ3.calculatorBill('IS_AN_AFFILIATE', totalBillDefault)
            const resultCompare = 90
            chai.expect(resultCompare).is.equals(resultFromStore);
        });
    });
    describe('Test customer for over 2 year', () => {
        it('should return object successfully', () => {
            const resultFromStore = resultQ3.calculatorBill('IS_CUSTOMER_FOR_OVER_2_YEAS', totalBillDefault)
            const resultCompare = 95
            chai.expect(resultCompare).is.equals(resultFromStore);
        });
    });

    describe('Test case for GROCERIES', () => {
        it('should return object successfully', () => {
            const resultFromStore = resultQ3.calculatorBill('ON_GROCERIES', totalBillDefault)
            const resultCompare = 100
            chai.expect(resultCompare).is.equals(resultFromStore);
        });
    });

    describe('Test case for GROCERIES with Bill on 100$', () => {
        it('should return object successfully', () => {
            const resultFromStore = resultQ3.calculatorBill('ON_GROCERIES', 200)
            const resultCompare = 190
            chai.expect(resultCompare).is.equals(resultFromStore);
        });
    });
});
