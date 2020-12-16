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
// another pointer that works on the non-zero elements of the array

let moveZeroes = function (nums) {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] === 0) {
      if (nums[j] === 0) {
        continue;
      } else {
        nums[i] = nums[j];
        nums[j] = nums[i];
        i++;
      }
    }
  };
  return nums;
}
moveZeroes([0, 0, 1]) // [1, 0, 0]
// [0, 0, 1]
