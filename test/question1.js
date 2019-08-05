process.env.NODE_ENV = 'test';
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);

const { load, store } = require('../question1/listFunction')
const strText = "key1=value1;key2=value2\nkeyA=value for key A;keyB=value for key B";
const data = [
    { key1: 'value1', key2: "value2" },
    { keyA: "value for key A", keyB: "value for key B" }
];

/// UNIT TEST QUESTION 1
describe('Test question 1', () => {
    beforeEach((done) => {
        done();
    });
    // test function load test
    describe('testing function LOAD', () => {
        it('should return object successfully', () => {
            const getArrData = load(strText);
            chai.expect(data).to.deep.equals(getArrData);
        });
    });
    // test function load test
    describe('testing function STORE', () => {
        it('should return object successfully', () => {
            const getText = store(data);
            chai.expect(strText).is.equals(getText);
        });
    });
});