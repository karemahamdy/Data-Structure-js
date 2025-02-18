// 3289. The Two Sneaky Numbers of Digitville

// In the town of Digitville, there was a list of numbers called nums containing integers from 0 to n - 1. Each number was supposed to appear exactly once in the list, however, two mischievous numbers sneaked in an additional time, making the list longer than usual.
// As the town detective, your task is to find these two sneaky numbers. Return an array of size two containing the two numbers (in any order), so peace can return to Digitville.

// Input: nums = [0,1,1,0]
// Output: [0,1]
// Input: nums = [0,3,2,1,3,2]
// Output: [2,3]
// Explanation:
// Input: nums = [7,1,5,4,3,4,6,0,9,5,8,2]
// Output: [4,5]

var getSneakyNumbers = function(s) {
  let counter = {};
  let num = []
 for ( let i of s ){
 counter[i] = (counter[i] || 0) + 1 
 }
 for ( let i in counter) {
 if (counter[i]  === 2)
 num.push(Number(i))
 } 
 return num

};
