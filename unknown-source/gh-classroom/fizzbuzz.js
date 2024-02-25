// # FizzBuzz

// - Write a program in `fizzbuzz.js` that prints an array of integers from 1 to 100.
// - For multiples of 3, show `"Fizz"` instead of the number.
// - For multiples of 5, show `"Buzz"` instead of the number.
// - For multiples of 3 and 5, show `"FizzBuzz"` instead of the number.
// - Return an array containing the results based on the rules above.

module.exports = function fizzBuzz() {
    let result = [];
    for (let i = 1; result.length < 100; i++) {
      if ((i % 3 == 0) && (i % 5 == 0)) {
        result.push("FizzBuzz");
      }
      else if (i % 3 == 0) {
        result.push("Fizz");
      }
      else if (i % 5 == 0) {
        result.push("Buzz");
      }
      else {
        result.push(i);
      }
    }
    return result;
  }