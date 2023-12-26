class Solution {
  majorityElement(nums) {
          // Initialize two variables, majority and count. Set majority to any element from the array and count to 0.
  
          // Iterate through the array. For each element:
  
          // If count is 0, set the current element as the majority.
          // If the current element is equal to the majority, increment count. Otherwise, decrement count.
          // After the first pass, the majority is a potential majority element.
          // Perform a second pass through the array to count the occurrences of the majority. If it occurs more than ⌊n / 2⌋ times, return the majority. Otherwise, there is no majority element.
          
          let majority = nums[0];
          let count = 0;
  
          for (let num of nums) {
              if (count === 0) {
                  majority = num;
              }
  
              count += (num === majority) ? 1 : -1;
          }
  
          // Second pass to count occurrences of the majority element
          count = 0;
          for (let num of nums) {
              if (num === majority) {
                  count++;
              }
          }
  
          // Check if the majority element occurs more than ⌊n / 2⌋ times
          if (count > nums.length / 2) {
              console.log("Majority Element:", majority);
              return majority;
          }
  
          // If no majority element found
          console.log("No Majority Element Found");
          return -1; // or any appropriate value
      }
  }
  
  // Example usage
  const solution = new Solution();
  const nums = [2, 2, 1, 1, 1, 2, 2];
  solution.majorityElement(nums);