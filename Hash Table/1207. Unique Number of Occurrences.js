// 1207. Unique Number of Occurrences

// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.
  // Example 1:
// Input: arr = [1, 2, 2, 1, 1, 3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.



var uniqueOccurrences = function (arr) {
  let current = new Map();

  for (let key of arr) {
    current.set(key, (current.get(key) || 0) + 1);
  }

  let unique = new Set();

  for (let count of current.values()) {
    if (unique.has(count)) {
      return false;
    }
    unique.add(count);
  }

  return true;
};
