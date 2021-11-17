/*
* Extend the Number prototype with a new method called `toEnglish`.
* It should return the number as a string using English words.
* Examples:
*   (7).toEnglish(); // > "seven"
*   (575).toEnglish(); // > "five hundred seventy-five"
*   (78193512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*/

var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};

Number.prototype.toEnglish = function(helper = false) {
  if (this < 0) {
    return "negative " + Math.abs(this).toEnglish();
  }
  if (numbersToWords.hasOwnProperty(this)) {
    return numbersToWords[this];
  } else if (numbersToPlace.hasOwnProperty(this)) {
    if (!helper) {
      return 'one ' + numbersToPlace[this];
    } else {
      return numbersToPlace[this];
    }
  } else if (this < 100) {
    var base = Math.floor(this / 10) * 10;
    return base.toEnglish(true) + '-' + (this - base).toEnglish(true);
  }

  var zeroes = Math.floor(Math.log10(this));
  var place = Math.pow(10, zeroes);

  if (zeroes >=4 && zeroes % 3 > 0) {
    place = Math.pow(10, Math.floor(zeroes / 3) * 3);
  }

  var digit = Math.floor(this / place);
  var used = digit * place;
  var remaining = this - used;

  return digit.toEnglish(true) + ' ' + place.toEnglish(true) + ' ' + remaining.toEnglish(true);
}