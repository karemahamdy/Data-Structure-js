// 228. Summary Ranges

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  const result = [];
  let start = nums[0];

  for (let i = 1; i <= nums.length; i++) {
    if (nums[i - 1] + 1 === nums[i]) continue;

    if (start === nums[i - 1]) {
      result.push(`${start}`);
    } else {
      result.push(`${start}->${nums[i - 1]}`);
    }
    start = nums[i];
  }

  return result;
};