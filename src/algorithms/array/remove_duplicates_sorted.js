// Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
// Clarification:
// Confused why the returned value is an integer but your answer is an array?
// Note that the input array is passed in by reference, which means a modification to the input array will be known to the caller as well.

// EXAMPLE #1
// Input: nums = [1,1,2]
// Output: 2, nums = [1,2]
// Explanation: Your function should return length = 2,
// with the first two elements of nums being 1 and 2

// EXAMPLE #2
// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4]
// Explanation: Your function should return length = 5,
// with first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.
// It doesn't matter what values are set beyond the returned length.


// problem-solving approach: TWO POINTER APPROACH
// 1 pointer to keep track of the current element in the original array
// Another one for just the unique elements

let removeDuplicates = function (nums) {
  if (nums.length === 0) return 0; // edge case
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    // once an ele is encountered, bypass duplicates
    // and move on to next unique ele
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j]
    }
  }
  return i + 1; // return array length (= idx of i + 1)
}