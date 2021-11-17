/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*/

var rockPaperScissors = function (numTimes) {
  // TODO: your solution here
  var rpsMoves = ['R', 'P', 'S'];
  var tempStorage = [];
  var results = [];

  var getMoves = function (bucket) {
    if (bucket.length === numTimes) {
      results.push(bucket);
      return;
    } else {
      for (var i = 0; i < rpsMoves.length; i++) {
        getMoves(bucket.concat(rpsMoves[i]));
      }
    }
  };

  if (numTimes === 0) {
    return results;
  } else {
    getMoves([]);
  }

  for (var i = 0; i < results.length; i++) {
    results[i] = results[i].join('');
  }

  return results;
};