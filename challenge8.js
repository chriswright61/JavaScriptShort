// If I add up the digits of the number 19082
// I would get 1+9+0+8+2=20.
// Add the digits of the number:
// 371072875339021027987979982208375902465101357402
// this number is too big to handle so I split it

const addNumbers = number => {
  let numberString = number.toString();
  let digits = numberString.length;
  let total = 0;
  for (let index = 0; index < digits; index++) {
    let element = parseInt(numberString[index]);
    total = total + element;
  }
  return total;
};

// function addNumbers(number) {
//   let numberString = number.toString();
//   let digits = numberString.length;
//   let total = 0;
//   for (let index = 0; index < digits; index++) {
//     let element = parseInt(numberString[index]);
//     total = total + element;
//   }
//   return total;
// }

// number = 371072875339021027987979982208375902465101357402;
// this number is too big to handle so split it
number1 = 3710728753390210;
number2 = 2798797998220837;
number3 = 5902465101357402;
total = addNumbers(number1) + addNumbers(number2) + addNumbers(number3);
console.log(total);
