// Create a function that takes two numbers and an operator as parameters.
// It should return a print out of the sum e.g. “1 + 2 = 3” or “4 x 6 = 24”.

function calcNumbers(num1, num2, numOperator) {
  if (numOperator == "+") {
    return num1 + num2;
  } else if (numOperator == "-") {
    return num1 - num2;
  } else if (numOperator == "*") {
    return num1 * num2;
  } else if (numOperator == "/") {
    return num1 / num2;
  }
}

console.log(calcNumbers(1, 2, "+"));
console.log(calcNumbers(10, 2, "-"));
console.log(calcNumbers(2, 2, "*"));
console.log(calcNumbers(6, 3, "/"));
