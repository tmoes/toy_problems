/*
Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.
A sudoku board is solved if each column, row, and 3 x 3 subgrid contains all of the digits from 1 to 9.
Input: A String representing the board.
Output: 'solved' if the board is valid, 'invalid' if it isn't
Example input:
"735814296\n
 896275314\n
 214963857\n
 589427163\n
 362189745\n
 471356982\n
 923541678\n
 648792531\n
 157638429"
*/

function sudokuChecker(board) {
  // Your code here.
  // Edge cases
  if (typeof board !== 'string') {
    return 'invalid';
  }
  if (board.length !== 89) {
    return 'invalid';
  }
  let intIndex = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  board = board.split('\n');
  let newBoard = [];
  for (let i = 0; i < board.length; i++) {
    newBoard.push(board[i].split(''));
  }
  board = newBoard;
  // If one of the squares contains more or less than 9 or has any other chars besides 1-9
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i].length !== 9) {
        return 'invalid';
      }
      if (intIndex.indexOf(board[i][j]) === -1) {
        return 'invalid';
      }
    }
  }

  // Break board into rows, cols, boxes
  let rows = [];
  let cols = [];
  let boxes = [];

  for (let i = 0; i < 9; i++) {
    rows.push([]);
    cols.push([]);
    boxes.push([]);
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      rows[i].push(board[i][j]);
      cols[j].push(board[i][j]);
      let boxIdx = Math.floor((i / 3)) * 3 + Math.floor(j / 3);
      boxes[boxIdx].push(board[i][j]);
    }
  }

  // Validate rows, cols, and boxes
  let valid = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
  }

  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < rows[i].length; j++) {
      if (valid[rows[i][j]] === 0) {
        valid[rows[i][j]]++;
      } else {
        return 'invalid';
      }
    }
    // Reset valid
    for (let key in valid) {
      valid[key] = 0;
    }
  }

  for (let i = 0; i < cols.length; i++) {
    for (let j = 0; j < cols[i].length; j++) {
      if (valid[cols[i][j]] === 0) {
        valid[cols[i][j]]++;
      } else {
        return 'invalid';
      }
    }
    // Reset valid
    for (let key in valid) {
      valid[key] = 0;
    }
  }

  for (let i = 0; i < boxes.length; i++) {
    for (let j = 0; j < boxes[i].length; j++) {
      if (valid[boxes[i][j]] === 0) {
        valid[boxes[i][j]]++;
      } else {
        return 'invalid';
      }
    }
    // Reset valid
    for (let key in valid) {
      valid[key] = 0;
    }
  }

  return 'solved';
};