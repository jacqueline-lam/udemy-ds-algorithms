// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.
// DO NOT allocate another 2D matrix and do the rotation.

// Example 1:
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// TRANSPOSE MATRIX FIRST
// => [[1,4,7], [2,5,8], [3,6,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]
// [lastArr[0], secondLast[0], thirdLastArr[0]], ...

// Example 2:
// Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

// Example 3:
// Input: matrix = [[1]]
// Output: [[1]]

// Example 4:
// Input: matrix = [[1,2],[3,4]]
// Output: [[3,1],[4,2]]

// Break it down - take steps of problems
// identify matrix length = number of subArrays
// j=i; transpose => swap matrix[i][j] with matrix[j][i]

//Time Complexity: O(N^2); Space: O(1) by doing rotation in place
let rotate = function (matrix) {
  // transpose matrix
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[0].length; j++) {
      if (j > i) { // skip cell that doesn't have to be swapped
        let current = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = current;
      }
    }
  }
  // reverse each subArray/ row
  for (let row = 0; row < matrix.length; row++) {
    matrix[row].reverse();
  }
};