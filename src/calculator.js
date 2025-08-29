function addTwoNumbers(firstNumber, secondNumber) {
    const result = firstNumber + secondNumber;
    return result;
};

function calculateAverageOfTwoNumbers(firstNumber, secondNumber) {
    const sum = addTwoNumbers(firstNumber, secondNumber);
    const average = sum / 2;
    return average;
};


module.exports = {
    addTwoNumbers,
    calculateAverageOfTwoNumbers
}

