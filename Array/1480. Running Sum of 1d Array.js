// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]

var runningSum = function(nums) {
  let sum = 0;
 return nums.map(num => sum += num);  
};