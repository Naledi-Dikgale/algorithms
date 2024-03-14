// You are in charge of the cake for a child's birthday. 
// You have decided the cake will have one candle for each year of their total age.
// They will only be able to blow out the tallest of the candles.
// Count  how many candles are tallest.

// Example
// candles = [4,4,1,3]
// The maximum height candles are 4 units high. There are 2 of them, so return 2.

// Function Description
// Complete the function birthdayCakeCandles in the editor below.
// Complete the function birthdayCakeCandles in the editor below.


function birthdayCakeCandles(candles) {
  let max = Math.max(...candles);
  let count = candles.filter(candle => candle === max).length;
  return count;
}


