// SLIDING WINDOW PATTERN
// Time Complexity = O(N)
// only loop over aray 1 time
// sliding window: 1 subtraction & 1 addition in every iteration
// instead of readding every num to cal. sum

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null; //edge case
  for (let i = 0; i < num; i++) { // loop #1 - create first sum
    maxSum += arr[i];
  }
  tempSum = maxSum;
  // loop #2 - start from 2nd 'num' pair of sum
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    // compare the previous pair with current pair
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3) // 19
// [2,6,9...] //tempSum = 17
// [-2,6,9, +2...] //tempSum = 17 - 2 + 2 = 17
