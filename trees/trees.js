function leftmostNodesSum(array) {
  // your code here
  let sum = 0;

  function dfs(array, i) {
    if (i >= array.length || array[i] === 0) {
      return 0;
    }

    let leftSum = dfs(array, 2 * i + 1);
    let currentSum = array[i] + leftSum;

    sum = Math.max(currentSum, sum);

    return array[i] + Math.max(leftSum);
  }

  dfs(array, 0);
  return sum;
  
}

console.log(leftmostNodesSum([2, 7, 5, 2, 6, 0, 9]))
// => 11

module.exports = leftmostNodesSum
