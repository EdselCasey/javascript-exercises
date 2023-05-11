const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  let result = arr[0];
  if (arr.length === 0) {
    return 0;
  }else {
    for(i = 1; i <= arr.length - 1; i++){
      result += arr[i]
    }
  }
  return result
};

const multiply = function(arr) {
  let result = arr[0];
  for(i = 1; i <= arr.length - 1; i++){
    result *= arr[i]
  }
  return result
};

const power = function(num, pow) {
  let result = num;
	for(i = 1; i < pow; i++){
   result *= num;
  }
  return result;
};

const factorial = function(num) {
  let result = num;
  if(num === 0) {
    return 1;
  }else {
    for(i = num - 1; i >= 1; i--){
      result *= i;
    }
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
