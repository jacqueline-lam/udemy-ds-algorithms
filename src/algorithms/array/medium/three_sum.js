// 3Sum

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
// such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.


// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

// Example 2:
// Input: nums = []
// Output: []

// Example 3:
// Input: nums = [0]
// Output: []

// Constraints:
// 0 <= nums.length <= 3000
// -105 <= nums[i] <= 105

// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */

// HINTS
// HINT #1
// So, we essentially need to find three numbers x, y, and z such that
//  they add up to the given value. If we fix one of the numbers say x,
// we are left with the two-sum problem at hand!

// HINT #2
// For the two-sum problem, if we fix one of the numbers, say
// x
// , we have to scan the entire array to find the next number
// y
// which is
// value - x
// where value is the input parameter. Can we change our array somehow so that this search becomes faster?

// HINT #3
// The second train of thought for two-sum is, without changing the array,
// can we use additional space somehow? Like maybe a hash map to speed up the search?

// ANSWER
let threeSum = function (nums) {
  // edge case - not triples
  let results = [];
  if (nums % 3 !== 0) return results;
  // no duplicate triplets
};

// Leetcode answer
var threeSumB = function (nums) {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    let low = i + 1, high = nums.length - 1, sum = 0;

    while (low < high) {
      sum = nums[i] + nums[low] + nums[high];

      if (sum === 0) {
        result.push([nums[i], nums[low], nums[high]]);
        while (nums[low + 1] === nums[low]) low++;
        while (nums[high - 1] === nums[high]) high--;
        low++;
        high--;
      } else if (sum < 0) low++;
      else high--;
    }
    while (nums[i + 1] === nums[i]) i++;
  }
  return result;
};