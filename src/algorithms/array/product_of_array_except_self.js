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
// Runtime: O(N^2) — 9604 ms, faster than 5.01% of JavaScript online submissions
// Memory Usage: 53.9 MB, less than 43.72% of JavaScript online submissions
function productExceptSelf(nums) {
  let result = [];
  let numsCopy = new Array(...nums)
  for (let i = 0; i < nums.length; i++) {
    let product = 1;
    for (let j = i + 1; j < numsCopy.length; j++) {
      product *= numsCopy[j];
      // console.log('current product= ', product);
    }
    numsCopy.push(numsCopy[i]);
    // console.log('numsCopy =', numsCopy)
    result.push(product);
    // console.log('result =', result);
  }
  return result;
}
// current product=  2
// current product=  6
// current product=  24
// numsCopy = [ 1, 2, 3, 4, 1 ]
// result = [ 24 ]
// current product=  3
// current product=  12
// current product=  12
// numsCopy = [ 1, 2, 3, 4, 1, 2 ]
// result = [ 24, 12 ]
// current product=  4
// current product=  4
// current product=  8
// numsCopy = [
//   1, 2, 3, 4,
//   1, 2, 3
// ]
// result = [ 24, 12, 8 ]
// current product=  1
// current product=  2
// current product=  6
// numsCopy = [
//   1, 2, 3, 4,
//   1, 2, 3, 4
// ]
// result = [ 24, 12, 8, 6 ]

// Attempt at O(N) Solution
// Runtime: 125 ms, faster than 74.51% of JavaScript online submissions
// Memory Usage: 54.7 MB, less than 32.15% of JavaScript online submissions

function productExceptSelfB(nums) {
  let result = new Array(nums.length);
  let leftProduct = 1;
  let rightProduct = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = rightProduct;
    rightProduct *= nums[i];
  }
  for (let j = 0; j < nums.length; j++) {
    result[j] *= leftProduct;
    leftProduct *= nums[j];
  }
  return result;
}

productExceptSelfB([1, 2, 3, 4])
//[1,2,3,4] //=> [24,12,8,6]
// 2*3*4=24, 3*4*1=12, 4*1*2=8, 1*2*3=6

// i=3 result[3] = 1; right = right * nums[3]=1*4;
// i=2 result[2]= 4; right=4*3=12
// i=1 result[1]=12; right=12*2=24
// i=0 result[0]=24; right=24*1=24
// j=0 result[0] = 24*1=24; left = 1*1=1;
// j=1 result[1] = 12*1= 12; left=1*2=2
// j=2 result[2] = 4*2=8; left=2*3=6;
// j=3 result[3]= 1*6=6; left=6*4=24
// result = [24,12,8,6]



/*
[1,2,3,4]
The array should be multiplication of all values except the index that we are currenty on:
[2x3x4 (not 1),
1x3x4 (not 2),
1x2x4 (not 3),
1x2x3  (not 4)] = [24, 12, 8 , 6]

In this problem, if division was allowed:
1. We run a loop on array and get 1x2x3x4 = 24.
2. we run another array, and for each index:
  24/1 = 24
  24/2 = 12
  24/3 = 8
  24/4 = 6
------------------------------------------------
Without division:

we create 2 arrays:

1 array with incremental multiplication from left,
1 array with incremental multiplication from right.

at the start index of these arrays, we'll have 1 (as no multiplication prior to it).

left arr = [1, (1)x1, (1x1)x2, (1x1x2)x3] = [1, 1, 2, 6]
right arr = [(1x4x3)x2, (1x4)x3, (1)x4 ,1] = [24, 12, 4, 1]

now, at each index, in left array, we'll have mutiple of left elements prior that index.
In right array, we'll have mutiple of right elements ahead of that index.

So, we'll multiply [1, 1, 2, 6] X  [24, 12, 4, 1] at each index.

Result = [24, 12, 8, 6]
1 array
*/
// Another O(N) SOLUTION w/ explanation above
// Runtime: 158 ms, faster than 51.23% of JavaScript online submissions for Product of Array Except Self.
// Memory Usage: 52 MB, less than 68.13% of JavaScript online submissions
let productExceptSelfC = function (nums) {
  let leftArr = [];
  let leftMultiplication = 1;

  for (let i = 0; i < nums.length; i++) {
    leftArr[i] = leftMultiplication;
    leftMultiplication *= nums[i];
  }

  let rightArr = [];
  let rightMultiplication = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    rightArr[i] = rightMultiplication;
    rightMultiplication *= nums[i];
    rightArr[i] *= leftArr[i]; //this additional step saves us from having another iteration. We can do the multiplication at the spot.
  }

  return rightArr;
};




