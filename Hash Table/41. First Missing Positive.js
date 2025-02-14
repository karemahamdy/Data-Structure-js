// 41. First Missing Positive

// Given an unsorted integer array nums.Return the smallest positive integer that is not present in nums.
// You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.

  // Example 1:
// Input: nums = [1, 2, 0]
// Output: 3
// Explanation: The numbers in the range[1, 2] are all in the array.


var firstMissingPositive = function (nums) {
  let contains1 = false;
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] === 1) {
      contains1 = true;
    }
    if (nums[i] <= 0 || nums[i] > n) {
      nums[i] = 1;
    }
  }
  if (!contains1) return 1;
  for (let i = 0; i < n; i++) {
    let value = Math.abs(nums[i]);
    if (value === n) {
      nums[0] = -Math.abs(nums[0]);
    } else {
      nums[value] = -Math.abs(nums[value]);
    }
  }
  for (let i = 1; i < n; i++) {
    if (nums[i] > 0) return i;
  }
  if (nums[0] > 0) return n;
  return n + 1;
};