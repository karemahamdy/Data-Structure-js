// 1684. Count the Number of Consistent Strings

// You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.
//Return the number of consistent strings in the array words.

// Example 1:
// Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
// Output: 2

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
let countConsistentStrings = (allowed, words) => {
  const allowedSet = new Set(allowed);
  let count = 0;
  
  for (let word of words) {
      if ([...word].every(char => allowedSet.has(char))) {
          count++;
      }
  }
  
  return count;
}