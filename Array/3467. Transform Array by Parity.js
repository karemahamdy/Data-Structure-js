// 3467. Transform Array by Parity

// You are given an integer array nums. Transform nums by performing the following operations in the exact order specified:
// Replace each even number with 0.
// Replace each odd numbers with 1.
// Sort the modified array in non-decreasing order.
// Return the resulting array after performing these operations.

 
// Input: nums = [4,3,2,1]
// Output: [0,0,1,1]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function(nums) {
  let sortedArr = []
  for ( let i=0; i<nums.length; i++) {
      nums[i] %2==0 ?  sortedArr.push(0) : sortedArr.push(1)

  }
  return sortedArr.sort()
};