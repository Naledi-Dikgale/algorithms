// The function should iterate through the input array and separate zero
// and non-zero elements into different arrays.
// It should then concatenate these arrays, placing all zero elements at the end.
// The order of non-zero elements should remain unchanged.
// Edge Cases:
// The function should handle empty arrays by returning an empty array.
// If the input array contains only zeros, the function should return the array unchanged.


// My solution:

// Initialize two arrays to hold non-zero and zero elements
// Loop through the input array
// If the element is non-zero, push it to nonZeroElements
// If the element is zero, push it to zeroElements
// Concatenate the non-zero and zero elements arrays
// Return the result array
// Test the function with an example array

function moveZerosToEnd(arr) {
  const nonZeroElements = [];
  const zeroElements = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      nonZeroElements.push(arr[i]);
    } else {
      zeroElements.push(arr[i]);
    }
  }
  const result = nonZeroElements.concat(zeroElements);
  return result;
}

const inputArray = [1, 0, 2, 0, 3, 0, 4, 5, 0];
const resultArray = moveZerosToEnd(inputArray);
console.log(resultArray); // Output: [1, 2, 3, 4, 5, 0, 0, 0, 0]
