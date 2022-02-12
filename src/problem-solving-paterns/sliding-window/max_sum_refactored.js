// Given an array of integers & a number,
// write fn which finds the max sum of a subarray with length of the num passed to the fn
// Note that subarray must consist of consecutive eles from OG array
// In the example below, [100,200,300] is a subarray of the OG array but [100,300] isn't
// Examples
maxSubarraySum([100, 200, 300, 400], 2) //700
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4) //39
maxSubarraySum([-3, 4, 0, -2, 6, -1], 2) //5
maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2) //5
maxSubarraySum([2, 3], 3) //nulll

// 1. Understand problem:
// Rephrase = find maxSum of n consecutive integers
// Input = arr of unsorted ints (+ve/-ve) and n length of subarray
// Output = maxSum of subarray
// 2. Explore examples - unsorted ints, edge case = if num > ints.length -> null
// 3. Break it down
// Declare and set vars maxSum and tempSum as 0
// Handle edge case - if ints.length < num, return null
// Loop thru 1st set subarray - i=0; i < num; i++ -> increment maxSum
// set tempSum = maxSum
// Now loop through whole arr of ints from i = num (2nd subArray onwards)
// *Cal tempSum by - 1st ele in prev subarray (arr[i-num]) + ele at current i (new ele in subArr)
// set maxSum by comparing maxSum and current tempSum using Math.max()
// Looped thru whole arr, return the maxSum var


// SLIDING WINDOW PATTERN: Find first subarrary/ num set, then - 1st/prev ele and + next ele
// Time Complexity = O(N)
// only loop over aray 1 time
// sliding window: 1 subtraction & 1 addition in every iteration
// instead of readding every num to cal. sum

function maxSubarraySum(ints, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (ints.length < num) return null; //edge case
  for (let i = 0; i < num; i++) { // loop #1 - create first sum
    maxSum += ints[i];
  }
  tempSum = maxSum;
  // loop #2 - start from 2nd 'num' pair of sum
  for (let i = num; i < ints.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    // compare the previous pair with current pair
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3) // 19
// [2,6,9...] //tempSum = 17
// [-2,6,9, +2...] //tempSum = 17 - 2 + 2 = 17
