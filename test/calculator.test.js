const { expect } = require('chai');
const { addTwoNumbers } = require('../src/calculator');

describe('Sum Function Tests', function () {

    it('The function should be able to add two positive numbers', function () {
        const sumResult = addTwoNumbers(5, 3);
        expect(sumResult).to.equal(8);
    });

    it('The function should be able to add a positive and a negative number', function () {
        const sumResult = addTwoNumbers(50, -15);
        expect(sumResult).to.equal(35);
    });

    it('The function should be able to add two negative numbers', function () {
        const sumResult = addTwoNumbers(-7, -9);
        expect(sumResult).to.equal(-16);
    });

    it('The function should be able to add two zeros', function () {
        const sumResult = addTwoNumbers(0, 0);
        expect(sumResult).to.equal(0);
    });
});