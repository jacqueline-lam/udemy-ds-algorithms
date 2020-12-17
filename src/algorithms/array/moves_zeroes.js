// Given an array `nums`, write a function to move all 0's to the end of it
//  while maintaining the relative order of the non-zero elements.

// Example:
// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Note:
// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

// TWO-POINTER APPROACH
// one pointer for iterating the array and
// another pointer that works on non-zero elements of the array

// curr used to find non-zero ele and anchor stays back -
// only move forward when curr finds non-zero and swap with it

let moveZeroes = function (nums) {
  let anchor = 0; // j to keep track of non-zeros

  for (let curr = 0; curr < nums.length; curr++) {
    if (nums[curr] !== 0) {
      let temp = nums[anchor];
      nums[anchor] = nums[curr];
      nums[curr] = temp;
      anchor++;
    }
  }

  return nums;
}
moveZeroes([0, 0, 1]) // [1, 0, 0]
// ca
// [0, 0, 1]
// a      c
//[0   0  1]
// SWAP nums[a] with nums[c]
//     a  c
//[1   0  0]
// ends loop as (c = 3) not < (length = 3)

//Example 2
moveZeroes([0, 1, 0, 3, 12]) // [1,3,12,0,0]
//  e=explorer a=anchor
// ---loop 1-----
// ea
// [0,1,0,3,12]
// ---loop 2-----
//  a e
//  0,1,0,3,12 -> num[e] != 0, swap num[e] with num[a]; a++;
//  a e
//  1,0,0,3,12 // SWAP and then a++ and next loop (e++)
// ---loop 3-----
//    a e
//  1 0 0 3 12
// ---loop 4-----
//    a   e
//  1 0 0 3 12
//    a   e     SWAPPED
//  1 3 0 0 12
// ---loop 5-----
//      a    e
//  1 3 0 0 12
//  1 3 12 0 0  SWAPPED

// 100MS
let moveZeroesB = function (nums) {
  let length = nums.length;
  for (let i = 0; i < length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      i--;
      length--;
    }
  }

  return nums;
};

let moveZeroesC = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[count++] = nums[i];
    }
  }

  for (let i = count; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
};
console.log(moveZeroes([0, 1, 0, 3, 12]));