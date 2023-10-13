/*
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) {
      return '';
  }

  // Iterate through characters of the first string
  for (let i = 0; i < strs[0].length; i++) {
      const char = strs[0][i];

      // Compare the current character with the same position in other strings
      for (let j = 1; j < strs.length; j++) {
          if (i === strs[j].length || strs[j][i] !== char) {
              return strs[0].slice(0, i); // Return the common prefix found so far
          }
      }
  }

  return strs[0]; // If all strings are identical, return any of them
};