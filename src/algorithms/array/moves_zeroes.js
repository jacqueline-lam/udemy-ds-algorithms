// Given an array `nums`, write a function to move all 0's to the end of it
//  while maintaining the relative order of the non-zero elements.

// Example:
// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Note:
// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

// two-pointer approach
// one pointer for iterating the array and
// another pointer that works on non-zero elements of the array

let moveZeroes = function (nums) {
  let j = 0; // j to keep track of non-zeros

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let temp = nums[j];
      nums[j] = nums[i];
      nums[i] = temp;
      j++;
    }
  }
  console.log(i)
  console.log(j)
  return nums;
}
moveZeroes([0, 0, 1]) // [1, 0, 0]
// i  j
// [0, 0, 1]
// i      j
//[0   0  1]
//[1   0  0]
//     i  j
// 1   0  0

//Example 2
moveZeroes([0, 1, 0, 3, 12]) // [1,3,12,0,0]
//  e=explorer a=anchor
// ea
// [0,1,0,3,12]
//  a e
//  0,1,0,3,12 -> num[e] != 0, swap num[e] with num[a]; a++;
//  1,0,0,3,12

//  1 0 0 3 12
//    i
