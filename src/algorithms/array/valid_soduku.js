// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

// Note:
// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

// Input: board =
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true

// Example 2:
// Input: board =
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

// The Set object lets you store unique values of any type,
// whether primitive values or object references.

let isValidSudoku = function (board) {
  // iterate thru each cell on board
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const value = board[row][col];
      if (value !== '.') {
        // check all three rule for every single num
        if (!isValidRow(board, row, col, value) ||
          !isValidCol(board, row, col, value) ||
          !isValidBox(board, row, col, value)) {
          return false
        }
      }
    }
  }
  return true;
};

function isValidRow(board, currentRow, currentCol, value) {
  for (let col = 0; col < 9; col++) {
    if (col !== currentCol) { //exclude currentCol
      // every other num must not = num at currCol
      if (board[currentRow][col] === value) {
        return false;
      }
    }
  }
  return true;
}

function isValidCol(board, currentRow, currentCol, value) {
  for (let row = 0; row < 9; row++) {
    if (row !== currentRow) {
      if (board[row][currentCol] === value) {
        return false;
      }
    }
  }
  return true;
}

function isValidBox(board, currentRow, currentCol, value) {
  const startRow = currentRow - (currentRow % 3);
  const startCol = currentCol - (currentCol % 3);

  // iterate over three rows
  for (let row = startRow; row < (startRow + 3); row++) {
    // iterate over each box
    for (let col = startCol; col < (startCol + 3); col++) {
      // exclude current row and column (box)
      if (row !== currentRow && col !== currentCol) {
        if (board[row][col] === value) {
          return false;
        }
      }
    }
  }
  // return true;
}