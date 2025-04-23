// 66. Plus One

// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer.The digits are ordered from most significant to least significant in left - to - right order.The large integer does not contain any leading 0's.

// Input: digits = [1, 2, 3]
// Output: [1, 2, 4]

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  // join + num + 1  + arr again 
  let c = digits.join("")
  let n = BigInt(c) + BigInt(1);
  return Array.from(String(n), Number);
};
digits = [4, 3, 2, 1]
console.log(plusOne(digits))