
// Return true if the two given strings are anagrams. Otherwise, return false.
// A word is an anagram of another word if both use the same letters in the same quantity, but arranged differently.
// For example:
// friend and Finder are anagrams.
// The Morse Code and Here come dots are anagrams as well.
// Note: You'll need to remove all non-alphanumeric characters
// (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for anagrams.

module.exports = function (stringA, stringB) {
  return (
    stringA
      .toLowerCase()
      .match(/[a-zA-Z]/g)
      .sort()
      .join('')
    ===
    stringB
      .toLowerCase()
      .match(/[a-zA-Z]/g)
      .sort()
      .join('')
  );
};