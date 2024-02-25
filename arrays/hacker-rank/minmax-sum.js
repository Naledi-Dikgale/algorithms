// Given five positive integers, find the minimum and maximum values that
// can be calculated by summing exactly four of the five integers.
// Then print the respective minimum and maximum values as a single line
// of two space-separated long integers.
// For example, arr = [1, 3, 5, 7, 9]. Our minimum sum is 1 + 3 + 5 + 7 = 16

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  // Calculate the minimum sum  of the first four numbers
  const minSum = arr.slice(0, 4).reduce((acc, num) => acc + num, 0);

  // Calculate the maximum sum of the last four numbers
  const maxSum = arr.slice(1).reduce((acc, num) => acc + num, 0);

  // Print the result
  console.log(minSum, maxSum);
}

function main() {
  const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}
