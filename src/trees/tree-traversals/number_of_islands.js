/*
200. Number of Islands (medium)

Given an m x n 2D binary grid grid which represents a map of
'1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by
connecting adjacent lands HORIZONTALLY or VERTICALLY.
You may assume all four edges of the grid are all surrounded by water.


Example 1:
Input: grid = [
  ["1","1","1","1w","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

Example 2:
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3

Constraints:
m == grid.lengthss
n == grid[i].length
1 <= m, n <= 300
grid[i][j] is '0' or '1'.

Topics: Array. Depth-First Search, Breadth-first Search, Union Find, Matrix
DFS = going to end of tree and then coming back up

// each subarr: grid[row] -> each num: grid[row1][0] then count++ (ONLY FIRST 1)
  // grid[row][i] = 0 -> keep track
  // top, right, bottom, left has to be 0
*/

// Brute Force - O(N^2) Solution
// Runtime: 125 ms, faster than 49.00% of JavaScript
// Memory Usage: 45.5 MB, less than 51.34% of JavaScript

// visit every ele on the grid
// if ele i'm on right now is '1' - record, increment island count
// start teraforming things on left, right, top, bottom as I know i'm on land
// all those eles considered i'm on land will be converted to water
// so when I run next loop, if I find a 1, that 1 is not part of previous island
let numIslands = function (grid) {
  let count = 0;

  // convert stuff around us to water
  const teraform = (rowI, colI, grid) => {
    // if we're at top/ bottom row, far left/ right, or at water
    if (grid[rowI] === undefined || grid[rowI][colI] === undefined || grid[rowI][colI] === '0') return;
    grid[rowI][colI] = '0';
    teraform(rowI + 1, colI, grid) // check top
    teraform(rowI - 1, colI, grid) // check bottom
    teraform(rowI, colI + 1, grid) // right
    teraform(rowI, colI - 1, grid) // left
  }

  // go through every element in this grid - hint in "vertically & horizontally"
  for (let rowIdx in grid) {
    for (let colIdx in grid[rowIdx]) {
      // check if island exists
      if (grid[rowIdx][colIdx] === '1') {
        count++;
        teraform(parseInt(rowIdx), parseInt(colIdx), grid)
      }
    }
  }

  return count;
}

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]

//   ["*1->0","1->0","0","0","0"],
//   ["1->0","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]

//   ["1->0","1->0","0","0","0"],
//   ["*1->0","1=>0","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]

//   ["1->0","1->0","0","0","0"],
//   ["1->0","1=>0","0","0","0"],
//   ["*0","0","1","0","0"],
//   ["0","0","0","1","1"]

//   ["1->0","1->0","0","0","0"],
//   ["1->0","1=>0","0","0","0"],
//   ["0","0","1","0","0"],
//   ["*0","0","0","1","1"]

//   ["1->0","*1->0","0","0","0"],
//   ["1->0","1=>0","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]

//   ["1->0","1->0", "0","0","0"],
//   ["1->0","*1=>0","0","0","0"],
//   ["0",   "0",    "1","0","0"],
//   ["0",   "0",    "0","1","1"]

//   ["1->0","1->0", "0","0","0"],
//   ["1->0","1=>0","0","0","0"],
//   ["0",   "*0",    "1","0","0"],
//   ["0",   "0",    "0","1","1"]

//...

//   ["1->0","1->0", "0","0","0"],
//   ["1->0","1=>0", "0","0","0"],
//   ["0",   "0",    "*1(->0)","0","0"], -> count = 1+1=2, invoke teraform
//   ["0",   "0",    "0","1","1"]

// ...

//   ["1->0","1->0", "0",    "0","0"],
//   ["1->0","1=>0", "0",    "0","0"],
//   ["0",   "0",    "1->0", "0","0"],
//   ["0",   "0",    "0",    "*1->0","1"] -> count = 2+1 = 3, invoke teraform

//   ["0",   "0",    "0",    "1->0","1->0"]

// return count = 3

