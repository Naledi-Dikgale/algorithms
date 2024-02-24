
// Input: nums = [1,1,1,2,2,3]
// Output: 5, nums = [1,1,2,2,3,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,0,1,1,1,1,2,3,3]
// Output: 7, nums = [0,0,1,1,2,3,3,_,_]
// Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
 
// ```
// Constraints:

// ```1 <= nums.length <= 3 * 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.```

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  // Handle edge case
  if (nums.length <= 2) {
      return nums.length;
  }

  let currentIndex = 2; // Start from the third element

  for (let i = 2; i < nums.length; i++) {
      if (nums[i] !== nums[currentIndex - 2]) {
          nums[currentIndex] = nums[i];
          currentIndex++;
      }
  }

  // Remove extra elements if any
  while (nums.length > currentIndex) {
      nums.pop();
  }

  return currentIndex;
};

const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
console.log(removeDuplicates(nums)); // Output: 7
console.log(nums); // Modified nums array: [0, 0, 1, 1, 2, 3, 3]