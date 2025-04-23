// 118. Pascal's Triangle
// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let result = [];
  for (let i = 0; i < numRows; i++) {
    let row = []
    if (i === 0) {
      row.push(1)
    } else {
      row.push(1)
      for (let j = 1; j < i; j++) {
        row[j] = result[i - 1][j - 1] + result[i - 1][j];
      }
      row.push(1)
    }
    result.push(row)
  }
  return result
};
