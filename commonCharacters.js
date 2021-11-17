/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 */

 var commonCharacters = function() {
  let args = arguments;
  let tempCommonChars = '';
  let commonChars = {};
  let smallest = 0;
  //  If any parameter is '', return ''
  for (let i = 0; i < args.length; i++) {
    if (args[i].length < 1) {
      return tempCommonChars;
    }
    if (typeof args[i] !== 'string') {
      return null;
    }
  }
  // Find the smallest word
  tempCommonChars = args[0];
  for (let i = 1; i < args.length; i++) {
    if (tempCommonChars.length > args[i].length) {
      tempCommonChars = args[i];
      smallest = i;
    }
  }
  for (let i = 0; i < tempCommonChars.length; i++) {
    if (tempCommonChars[i] === ' ') {
      continue;
    } else {
      commonChars[tempCommonChars[i]] = 1;
    }
  }
  // Iterate through each word in args
  for (let i = 0; i < args.length; i++) {
    if (smallest === i) {
      continue;
    } else {
      // Iterate through each letter in args[i]
      for (var j = 0; j < args[i].length; j++) {
        if (args[i][j] === ' ') {
          continue;
        }
        if (commonChars.hasOwnProperty(args[i][j])) {
          commonChars[args[i][j]] += 1;
        }
      }
    }
  }
  let results = '';
  for (var key in commonChars) {
    if (commonChars[key] >= args.length) {
      results += key;
    }
  }
  return results;
};