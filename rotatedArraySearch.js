/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance:
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 */

var rotatedArraySearch = function (rotated, target) {
  if (rotated.length === 0) return null;
  if (rotated.length < 2) return rotated[0] === target ? 0 : null;

  var idx = rotated.indexOf(target);
  return idx === -1 ? null : idx;

  // Splitting the array in two and searching both halves

  // if (idx === -1) {
  //   return null;
  // } else {
  //   return idx;
  // }
  // Define min/max indexes
  // var arr1 = [];
  // var arr2 = [];
  // var idx = 0;

  // Seperate Values
//   while (rotated[idx] > rotated[rotated.length - 1]) {
//     arr1.push(rotated[idx]);
//     idx++;
//   }
//   for (var i = idx; i < rotated.length; i++) {
//     arr2.push(rotated[i]);
//   }

//   //If target exceeds the last value in arr1, it is too big to be in the set
//   if (target > arr1[arr1.length - 1]) {
//     return null;
//   }
//   // If target is less than the smallest element, return null
//   if (target < arr2[0]) {
//     return null;
//   }

//   // Iterate through arr1 looking for target
//   if (target >= arr1[0]) {
//     for (var i = 0; i < arr1.length; i++) {
//       if (target === arr1[i]) {
//         return i;
//       }
//     }
//   }
//   // Iterate through arr2 looking for target, return (arr1.length + i) if found
//   if (target >= arr2[0]) {
//     for (var i = 0; i < arr2.length; i++) {
//       if (target === arr2[i]) {
//         return arr1.length + i;
//       }
//     }
//   }

// return null;
};