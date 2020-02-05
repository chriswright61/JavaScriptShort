// Challenge 9:
// Write a function that takes two numbers as parameters and
//returns a random number between them.

// function randnums(startNum, endNum) {
//   let range = endNum - startNum;
//   return Math.floor(Math.random() * range) + startNum;
// }

const randnums = (startNum, endNum) => {
  let range = endNum - startNum;
  return Math.floor(Math.random() * range) + startNum;
};

console.log(randnums(1, 5));
