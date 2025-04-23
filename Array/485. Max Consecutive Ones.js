// 485. Max Consecutive Ones
// Given a binary array nums, return the maximum number of consecutive 1's in the array.
// Input: nums = [1, 1, 0, 1, 1, 1]
// Output: 3

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  // let output = 0;
  // let count = 0;

  // for (let i = 0; i < nums.length; i++) {
  //     if (nums[i]) {
  //         count++;
  //     } else {
  //         output = Math.max(output, count);
  //         count = 0;
  //     }
  // }

  // return Math.max(output, count);
  return nums.reduce((acc, curr) => {
    if (curr === 1) {
      acc.count++;
    } else {
      acc.output = Math.max(acc.output, acc.count);
      acc.count = 0;
    }
    return acc;
  }, { output: 0, count: 0 }).output;
};