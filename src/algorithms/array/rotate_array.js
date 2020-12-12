// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Follow up:
// Try to come up as many solutions as you can - at least 3 different ways to solve this problem.
// Could you do it in-place with O(1) extra space?


// Example 1:
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// Example 2:
// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

//runtime = 116ms; memory = 39MB
let rotate = function (nums, k) {
  let rotations = k % nums.length;
  for (let j = 0; j < rotations; j++) {
    nums.unshift(nums.pop());
  }

  return nums;
}

// reverse method - 88ms runtime and 39.5MB memory
let rotateNums = function (nums, k) {
  k = k % nums.length; // rotations needed
  // reverse entire array
  reverse(nums, 0, nums.length - 1);
  // reverse first k elements in array
  reverse(nums, 0, k - 1);
  // reverse rest of the numbers
  reverse(nums, k, nums.length - 1);
};

let reverse = function (nums, start, end) {
  while (start < end) {
    let temp = nums[start];
    nums[start] = nums[end];
    // reverse last ele with first ele saved in temp var
    nums[end] = temp;
    start++;
    end--;
  }
}

// Test case
// [1,2,3,4,5] k = 7 -> 2
// 5, 4, 3, 2, 1 // reverse all ele (5,2,3,4,1 -> 5,4,3,2,1 -> 5,4,3,2,1)
// 4, 5, 3, 2, 1 // reverse first k ele
// 4, 5, 1, 2, 3 // reverse rest of the nums
