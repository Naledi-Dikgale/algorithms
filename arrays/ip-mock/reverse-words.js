// Create a JavaScript function that reverses the order of words in 
// a given string while preserving the order of characters within each word.
// Function should take a single string as input and return.
// a new string with the words reversed.
// For example, given the input string "hello world", your function should return "world hello".

// Solution 1

/**
 * Reverses the order of words in a string while preserving the order of characters within each word.
 * @param {string} str - The input string to be reversed.
 * @returns {string} - The string with reversed word order.
 */
function reverseWords(str) {
  // Split the string into an array of words
  const words = str.split(' ');
  
  // Reverse the order of words in the array
  const reversedWords = words.reverse();
  
  // Join the words back into a single string
  return reversedWords.join(' ');
}

// Test the function
const inputString = "hello world";
const reversedString = reverseWords(inputString);
console.log(reversedString); 

// Output: "world hello"
