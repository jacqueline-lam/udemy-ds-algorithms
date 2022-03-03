// Given an integer array nums, find the contiguous subarray (containing at least one number)
// which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// Example 2:
// Input: nums = [1]
// Output: 1

// Example 3:
// Input: nums = [5,4,-1,7,8]
// Output: 23

// Constraints:
// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104

//Follow up:
// If you have figured out the O(n) solution,
// try coding another solution using the divide and conquer approach, which is more subtle.

function maxSubarraySum(nums) {
  let prev = nums[0];
  let maxSum = nums[0];

  // for (let i = 0; i < nums.length; i++) {
  //   prev += nums[i];
  //   maxSum = Math.max(prev, maxSum);
  //   prev = prev < 0 ? 0 : prev;
  // }
  // return maxSum

  for (let i = 1; i < nums.length; i++) {
    prev = Math.max(prev + nums[i], nums[i]); // see if current ele > sum of currEle + prev(sum)
    maxSum = Math.max(prev, maxSum); // store the biggest sum so far
  }
  return maxSum;
}

maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]) // 6 //sum of subarray [4,-1,2,1]
//[-2,1,-3,4,-1,2,1,-5,4]
// prev = -2, maxSum = -2
// i=1(1): prev = max(-2+1, 1) = 1; maxSum = max(1,-2 the first ele) = 1
// i=2(-3): prev = max(1+-3=-2, -3) = -2; maxSum = max(-2, 1) =1;
// i=3(4): prev = max(-2+4=2, 4)= 4; maxSum = max(4,1) = 4
// i=4(-1): prev= max(4+-1=3, -1)=3; maxSum= max(3,4)=4
// *i=5(2): prev = max(4-1+2=5,2)=5; maxSum= max(prev=5, maxSum=4) = 5
// i=6(1): prev= max(4-1+2+1=6, nums[6]=1)= 6; maxSum(5,6)=6;
// i=7(-5): prev = max(6-5=1, -5)=1; max(6,1) = 6;
// i=8(4): prev= max(1+4=5, 4)= 5; max(1,6)=6;
// RETURN 6; does not matter where the subarray is, only have to remember biggest sum;



// ONE-LINE SOLUTION
// Runtime: 60 ms, faster than 67.95% of JavaScript online submissions
// Memory Usage: 38 MB, less than 5.55% of JavaScript online submissions

const maxSubArray = nums =>
  nums.reduce(
    ([localMax, globalMax], curr) => [
      Math.max(curr, localMax + curr),
      Math.max(curr, localMax + curr, globalMax),
    ],
    [-Infinity, -Infinity],
  )[1];
