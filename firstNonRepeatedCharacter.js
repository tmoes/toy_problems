/*
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

 var firstNonRepeatedCharacter = function(string, prevChar) {
  if (typeof string !== 'string') {
    return null;
  }
  if (string.length === 0) {
    return null;
  }
  var strArr = string.toUpperCase().split('');
  var currentChar = strArr.shift();
  var prevChar = prevChar || '';

  if (strArr.indexOf(currentChar) === -1 && prevChar !== currentChar) {
    return currentChar;
  } else {
    prevChar = currentChar;
    return firstNonRepeatedCharacter(strArr.join(''), prevChar);
  }
};