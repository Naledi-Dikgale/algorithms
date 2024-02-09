// Initialize a variable max to store the maximum value and set it to negative infinity.
// Iterate through each element of the array.
// Compare each element with the current maximum (max).
// If the current element is greater than max, update max with the value of the current element.
// After iterating through the entire array, max will hold the maximum value.
// Return max.

// Return null for empty array
function findMax(arr) {
  if (arr.length === 0) {
      return null; 
  }

   // Initialize max to negative infinity
  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
          max = arr[i];
      }
  }

   // Update max if current element is greater
    // Return the maximum number
  return max;
}

// Example usage:
const numbers = [1, 5, 3, 9, 2, 8];
console.log("Maximum number:", findMax(numbers)); // Output: 9
