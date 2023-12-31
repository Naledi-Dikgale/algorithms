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