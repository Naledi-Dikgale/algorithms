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

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
  // Find the maximum height of the candles
  const maxHeight = Math.max(...candles);

  // Count how many candles have the maximum height
  const tallestCandlesCount = candles.filter(candle => candle === maxHeight).length;

  return tallestCandlesCount;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const candlesCount = parseInt(readLine().trim(), 10);

  const candles = readLine().replace(/\s+$/g, '').split(' ').map(candlesTemp => parseInt(candlesTemp, 10));

  const result = birthdayCakeCandles(candles);

  ws.write(result + '\n');

  ws.end();
}