// 1550. Three Consecutive Odds

// Given an integer array arr, return true if there are three consecutive odd numbers in the array.Otherwise, return false.
// Input: arr = [2, 6, 4, 1]
// Output: false

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1) count++;
    else count = 0;
    if (count >= 3) return true;
  }
  return false;
};