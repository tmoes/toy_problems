/*
* Given a positive integer, return its digits reversed.
* - DO NOT CONVERT THE INPUT INTO A STRING OR ARRAY.
* - Only use integers and math in your solution.
*/

function reverseInteger(number){
    // If single digit, return number
    if (number < 10 && number > -10) {
      return number;
    }
    // If negative number, set flag
    var isNeg = false;
    if (number < 0) {
      isNeg = true;
      number = Math.abs(number);
    }

    let reversed = 0;
    let remainder = 0;

    while (number > 0) {
      // Get correct number column
      reversed *= 10;
      // Get remainder and store it in reversed
      remainder = number % 10;
      reversed += remainder;
      // Remove one's column from number
      number = (number - remainder) / 10;
    }

    return isNeg === true ? -reversed : reversed;
}