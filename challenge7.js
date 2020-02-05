// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

// let num = 5;
// let text = "";

let total = 0;
for (let num = 0; num < 1000; num++) {
  if (num % 3 == 0) {
    total = total + num;
  } else if (num % 5 == 0) {
    total = total + num;
  }
}

console.log(total);
