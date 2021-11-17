/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 */

var largestProductOfThree = function(array) {
  // TODO: everything

  // Handling edge cases
  if (array.length === 0) {
    return 0;
  } else if (array.length === 1) {
    return array[0];
  } else if (array.length === 2) {
    return array[0] * array[1];
  } else if (array.length === 3) {
    return array[0] * array[1] * array[2];
  } else {
    // Sort array
    let sortedArray = array.sort(function(a,b){return b-a});
    let len = sortedArray.length - 1;
    // Handling array of all negative numbers
    let isAllNeg = true;
    for (var i = 0; i < array.length; i++) {
      if (array[i] > 0) {
        isAllNeg = false;
        break;
      }
    }
    if (isAllNeg === true) {
      return sortedArray[0] * sortedArray[1] * sortedArray[2];
    }
    // Checking for negative numbers at the end of the array
    if (sortedArray[len] < 0 && sortedArray[len - 1] < 0) {
      let num1 = Math.abs(sortedArray[len]);
      let num2 = Math.abs(sortedArray[len - 1]);
      if (num2 > sortedArray[1] || num2 > sortedArray[2]) {
        sortedArray.unshift(num2);
      }
      if (num1 > sortedArray[0]) {
        sortedArray.unshift(num1);
      }
    }
    return sortedArray[0] * sortedArray[1] * sortedArray[2];
  }
};