const add = function (num1, num2) {
  let sum = num1 + num2;
  return sum;
};

const subtract = function (num1, num2) {
  let diff = num1 - num2;
  return diff;
};

const sum = function (arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];

  }
  return sum;
};

const multiply = function (arr) {

  let multi = 1;
  for (i = 0; i < arr.length; i++) {
    multi *= arr[i];

  }
  return multi;

};

const power = function (num1, num2) {

  let power = 1;
  for (i = 0; i < num2; i++) {
    power *= num1;

  }
  return power;

};

const factorial = function (num) {
  let eXPoint = 1;

  for (i = 1; i <= num; i++) {
    eXPoint *= i;

  }
  return eXPoint;

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
