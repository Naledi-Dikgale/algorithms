// # FizzBuzz

// - Write a program in `fizzbuzz.js` that prints an array of integers from 1 to 100.
// - For multiples of 3, show `"Fizz"` instead of the number.
// - For multiples of 5, show `"Buzz"` instead of the number.
// - For multiples of 3 and 5, show `"FizzBuzz"` instead of the number.
// - Return an array containing the results based on the rules above.

module.exports = function fizzBuzz() {
  // Initialize an empty array to store the result
  let result = [];
  // Loop through numbers from 1 to 100
  for (let i = 1; result.length < 100; i++) {
    // Check if the number is a multiple of both 3 and 5
    if ((i % 3 == 0) && (i % 5 == 0)) {
      result.push("FizzBuzz"); // If true, push "FizzBuzz" to the result array
    }
    // Check if the number is a multiple of 3
    else if (i % 3 == 0) {
      result.push("Fizz"); // If true, push "Fizz" to the result array
    }
    // Check if the number is a multiple of 5
    else if (i % 5 == 0) {
      result.push("Buzz"); // If true, push "Buzz" to the result array
    }
    // If none of the above conditions are met, push the number itself to the result array
    else {
      result.push(i);
    }
  }
  // Return the resulting array
  return result;
}