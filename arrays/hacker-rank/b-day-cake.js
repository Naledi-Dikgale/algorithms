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
  // Find the maximum height of the candles
  const maxHeight = Math.max(...candles);

  // Count how many candles have the maximum height
  const tallestCandlesCount = candles.filter(candle => candle === maxHeight).length;

  return tallestCandlesCount;
}





