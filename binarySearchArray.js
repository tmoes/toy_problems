/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function(array, target) {
  var helper = function(lowIndex, highIndex) {
    if (target > array[array.length - 1]) {
        return null;
    }
    if (target < array[0]) {
      return null;
    }
    if ((highIndex - lowIndex < 2) && (target !== array[lowIndex] && target !== array[highIndex])) {
      return null;
    }
    if (lowIndex === highIndex) {
      return null;
    }

    var tempIndex = Math.floor((highIndex - lowIndex) / 2) + lowIndex;

    if (target === array[tempIndex]) {
      return tempIndex;
    } else if (target < array[tempIndex]) {
      return helper(lowIndex, tempIndex);
    } else if (target > array[tempIndex]) {
      return helper(tempIndex, highIndex);
    }
  }

  return helper(0, array.length);
}