// 238. Product of Array Except Self

// Given an integer array nums, return an array answer such that
// answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and
// without using the division operation.


// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Example 2:
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

// Constraints:
// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// Follow up: Can you solve the problem in O(1) extra space complexity?
// (The output array does not count as extra space for space complexity analysis.)

// Hash? Multiple pointers?
// first, solve with o(n^2) solution
// Runtime: O(N^2) — 9604 ms, faster than 5.01% of JavaScript online submissions for Product of Array Except Self.
// Memory Usage: 53.9 MB, less than 43.72% of JavaScript online submissions for Product of Array Except Self.
function productExceptSelf(nums) {
  let result = [];
  let numsCopy = new Array(...nums)
  for (let i = 0; i < nums.length; i++) {
    let product = 1;
    for (let j = i + 1; j < numsCopy.length; j++) {
      product *= numsCopy[j];
      console.log('current product= ', product);
    }
    numsCopy.push(numsCopy[i])
    console.log('numsCopy =', numsCopy)
    result.push(product)
    console.log('result =', result);
  }
  return result;
}

// let result = [];
// let product = 1;

// for (let i = 0; i < nums.length; i++) {
//   product *= nums[i - 1]
// }
// for (let i = nums.length; i > 0; i--) {
//   let current = nums.pop();

// }
// let lookup = {};

// for (let i = 0; i < nums.length; i++) {
//   let num = nums[i]
//   lookup[num] = nums.slice(i + 1);
// }

productExceptSelf([1, 2, 3, 4])
//[1,2,3,4] //=> [24,12,8,6]
// 2*3*4=24, 3*4*1=12, 4*1*2=8, 1*2*3=6
// {1: [2,3,4], 2: [3,4]}
