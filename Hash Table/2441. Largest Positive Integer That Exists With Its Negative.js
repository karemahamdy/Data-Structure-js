// 2441. Largest Positive Integer That Exists With Its Negative

// Given an integer array nums that does not contain any zeros, find the largest positive integer k such that -k also exists in the array.
// Return the positive integer k. If there is no such integer, return -1.

// Example 1:
// Input: nums = [-1,2,-3,3]
// Output: 3
// Explanation: 3 is the only valid k we can find in the array.
// Example 2:

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
  let seen = new Set(); 
  let maxK = -1; 
  for (let num of nums) {
      if (seen.has(-num)) { 
          maxK = Math.max(maxK, Math.abs(num)); 
      }
      seen.add(num); 
  }
  
  return maxK;
};;