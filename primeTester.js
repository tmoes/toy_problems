/**
 * A prime number is a whole number that has no other divisors other than
 * itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

 var primeTester = function(n) {
  if (typeof n !== 'number' || n < 1 || n % 1 !== 0) {
    return false;
  }
  if (n === 1) {
    return false;
  }
  if (n === 2 || n === 3 || n === 5 || n === 7) {
    return true;
  }

  for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return n > 1;
};