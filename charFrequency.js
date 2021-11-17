
/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 */

var characterFrequency = function(string) {
  let result = [];
  let chars = {};
  // Put each letter into obj with count
  for (let i = 0; i < string.length; i++) {
    if (chars[string[i]] === undefined) {
      chars[string[i]] = 1;
    } else {
      chars[string[i]]++;
    }
  }
  // Extract and populate result
  for (let key in chars) {
    let temp = [];
    temp[0] = key;
    temp[1] = chars[key];
    result.push(temp);
  }

 // Sorts by numerical value
  result.sort(([a,b], [c,d]) => d-b);

  for (let j = 0; j < result.length; j++) {
    for (let i = 0; i < result.length - 1; i++) {
      if (result[i][1] === result[i + 1][1] && result[i][0] > result[i + 1][0]){
        let temp = result[i];
        result[i] = result[i + 1];
        result[i + 1] = temp;
      }
    }
  }

  return result;
};