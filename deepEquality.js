/*
  *
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
*/
var deepEquals = function(apple, orange) {
  // Exit case
  if (apple === orange) {
    return true;
  }
  // --EDGE CASES--
  if (typeof apple !== 'object' || typeof apple === 'undefined') {
    return false;
  }
  if (typeof orange !== 'object' || typeof orange === 'undefined') {
    return false;
  }
  // Isolating keys
  let appleKeys = Object.keys(apple);
  let orangeKeys = Object.keys(orange);
  // Check if keys arrays are equal length and hold same values in the same order
  if (appleKeys.length !== orangeKeys.length) {
    return false;
  }

  for (var key in appleKeys) {
    if (apple[key] !== orange[key]) {
      return false;
    }
  }

  // Check if values are equal
  for (var i = 0; i < appleKeys.length; i++) {
    var key = appleKeys[i];
    if (!deepEquals(apple[key], orange[key])){
      return false;
    }
  }
  return true;
};