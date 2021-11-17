/*
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *   longestRun("")       // null
 */

var longestRun = function (string) {
  if (typeof string !== 'string') {
    return null;
  }
  if (string.length === 0) {
    return null;
  }
  if (string.length < 2) {
    return [0, 1];
  }

  let start = 0;
  let currentRun = 1;
  let result = [];

  for (let i = 0; i < string.length; i++) {
    let count = 1;
    for (let j = i + 1; j < string.length; j++) {
      if (string[j] === string[i]) {
        count++;
      } else {
        break;
      }
      if (count > currentRun) {
        currentRun = count;
        start = i;
        result[0] = start;
        result[1] = start + currentRun - 1;
      }
    }
  }

  if (result.length === 0) {
    return [0, 0];
  }

  return result;
};