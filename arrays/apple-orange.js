// Function Description [https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true]

// Complete the countApplesAndOranges function in the editor below. It should print the number of apples and oranges that land on Sam's house, each on a separate line.

// countApplesAndOranges has the following parameter(s):
// s: integer, starting point of Sam's house location.
// t: integer, ending location of Sam's house location.
// a: integer, location of the Apple tree.
// b: integer, location of the Orange tree.
// apples: integer array, distances at which each apple falls from the tree.
// oranges: integer array, distances at which each orange falls from the tree.
// Input Format

// The first line contains two space-separated integers denoting the respective values of  and .
// The second line contains two space-separated integers denoting the respective values of  and .
// The third line contains two space-separated integers denoting the respective values of  and .
// The fourth line contains  space-separated integers denoting the respective distances that each apple falls from point .
// The fifth line contains  space-separated integers denoting the respective distances that each orange falls from point .

// Sample Input
// 7 11
// 5 15
// 3 2
// -2 2 1
// 5 -6
// Sample Output
// 1
// 1
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  let appleCount = 0;
  let orangeCount = 0;

  apples.forEach(apple => {
      const applePosition = a + apple;
      if (applePosition >= s && applePosition <= t) {
          appleCount++;
      }
  });

  oranges.forEach(orange => {
      const orangePosition = b + orange;
      if (orangePosition >= s && orangePosition <= t) {
          orangeCount++;
      }
  });

  console.log(appleCount);
  console.log(orangeCount);
}
