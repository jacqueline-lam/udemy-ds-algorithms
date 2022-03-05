// 15. 3Sum

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
// x, we have to scan the entire array to find the next number
// y, which is value - x
// where value is the input parameter. Can we change our array somehow so that this search becomes faster?

// HINT #3
// The second train of thought for two-sum is, without changing the array,
// can we use additional space somehow? Like maybe a hash map to speed up the search?

// QUESTIONS
// What size of list? -medium ~1000
// What is the range of items? -ve nums? +ve and -ve int
// Return one solution or all solution?
// Can we use eles more than once

// Brute Force
function threeSumBruteForce(nums) {
  let result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          result.push(nums[i], nums[j], nums[k])
        }
      }
    }
  }
  console.log(result);
  return result;
}
threeSumBruteForce([-1, 0, 1, 2, -1, -4]);
// Wrong
// 0: (3) [-1, 0, 1]
// 1: (3) [-1, 2, -1]
// 2: (3) [0, 1, -1]

// Output: [[-1,-1,2],[-1,0,1]]
// [-1, 0, 1, 2, -1, -4]
// i   j


// Thought process
// Does sorting help? sorting leads to O(NlogN) runtime + loop again O(N) in 2 Sum
// - O(NlogN) total runtime (because it is bigger than O(N))
// but in 3Sum we will have to loop twice O(N^2) - so sorting does not add to runtime
// Assume we're using first num, check rest of list for remaining sum

// ANSWER
let threeSum = function (nums) {
  let results = [];
  if (nums.length < 3) return results;

  //knowing the overall problem  will take at least O(N^2) time, we can
  // afford the O(NlogN) sort operation
  nums = nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length - 2; i++) {
    let partialTarget = 0 - nums[i]
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let partialSum = nums[j] + nums[k];
      if (partialSum === partialTarget) {
        results.push([nums[i], nums[j], nums[k]])
      } else if (partialSum > partialTarget) {
        // make sum smaller
        k -= 1;
      } else {
        // make sum bigger
        j += 1;
      }
    }
  }
  return results;
};

// 86ms O(N^2)
// Runtime: 124 ms, faster than 97.19%
// Memory Usage: 52.1 MB, less than 62.23%
// There are only two nested loops traversing the array, so time complexity is O(n^2).
// Two pointers algorithm takes O(n) time and the first ele can be fixed using another nested traversal.
// Space Complexity: O(1) as no extra space is required.

let threeSum = function (nums) {
  let results = [];
  if (nums.length < 3) return results;

  // knowing overall problem  will take at least O(N^2) time, we can afford O(NlogN) sort operation
  nums = nums.sort((a, b) => a - b)
  // if the question asks us for a custom target, we can control it here
  let target = 0

  // i = left most num in sorted list (SMALLEST)
  for (let i = 0; i < nums.length - 2; i++) {
    // once this num hits >0, no need to go further since +ve nums cannot sum to a -ve num
    // but account for possibility of [0,0,0]
    if (nums[i] > target) break;
    // don't want repeats, so skip numbers we've already seen
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // `j` = "middle" element between `i` and `k`
    // increment `j` up thru the array while `i` and `k` are anchored to their positions.
    // we will decrement `k` for each pass through the array, and finally increment `i`
    // once `j` and `k` meet.
    let j = i + 1;
    // `k` = "right" most element
    let k = nums.length - 1

    // to summarize our setup, we have `i` that starts at the beginning,
    // `k` starts at the end, and `j` races in between the two.

    // NOTE: `i` is controlled by our outer for-loop and will move the slowest.
    // in the meantime, `j` and `k` will take turns inching towards each other depending
    // on some logic we'll set up below. once they collide, `i` will be incremented up
    // and we'll repeat the process.

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k]

      // if we find target sum, increment `j` and decrement `k` for
      // other potential combos where `i` is the anchor
      if (sum === target) {
        // store the valid threesum
        results.push([nums[i], nums[j], nums[k]])

        // Continue to increment `j` and decrement `k`as long as those values are duplicated.
        // in other words, we wanna skip values we've already seen.
        // otherwise, an input array of [-2,0,0,2,2] would result in [[-2,0,2], [-2,0,2]].

        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k - 1]) k--;
        // finally, we need to move `j`-> and `k`<- to the next unique elements.
        // the previous while loops will not handle this.
        j++;
        k--;

        // if the sum is too small, increment `j` to get closer to the target
      } else if (sum < target) {
        j++;
        // if the sum is too large, decrement `k` to get closer to the target
      } else { // (sum > target)
        k--;
      }
    }
  }

  return results;
}


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