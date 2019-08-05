process.env.NODE_ENV = 'test';
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);

const { load, store } = require('../question1/listFunction')
const { Q1: { strText, array } } = require('../data')

/// UNIT TEST QUESTION 1
describe('Test question 1', () => {
    beforeEach((done) => {
        done();
    });
    // test function load test
    describe('testing function LOAD', () => {
        it('should return object successfully', () => {
            const getArrData = load(strText);
            chai.expect(array).to.deep.equals(getArrData);
        });
    });
    // test function load test
    describe('testing function STORE', () => {
        it('should return object successfully', () => {
            const getText = store(array);
            chai.expect(strText).is.equals(getText);
        });
    });
});