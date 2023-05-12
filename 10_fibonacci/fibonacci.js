const fibonacci = function(count) {
    let firstNum = 0;
    let secondNum = 1;
    if (count < 0) {
        return "OOPS";
    }
    if (count === 0) {
        return 0;
    }
    for (i = 1; i < count; i++){
        let sum = secondNum;
        secondNum = firstNum + secondNum;
        firstNum = sum;
    }
    return secondNum;
};

// Do not edit below this line
module.exports = fibonacci;
