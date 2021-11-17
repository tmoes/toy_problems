/*
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */

 var quicksort = function(array) {
  var pivot = 0;
  var arrCopy1 = [];
  var arrCopy2 = [];

  // base cases
  if (array.length <= 1) {
    return array;
  }
  for (var i = 1; i < array.length; i++) {

    if (array[i] < array[pivot]) {
      arrCopy1.push(array[i]);

    } else if (array[i] >= array[pivot]) {
      arrCopy2.push(array[i]);
    }
  }

  return [...quicksort(arrCopy1), array[pivot], ...quicksort(arrCopy2)];
};