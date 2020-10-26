// gien an array of integers and a num
// find the max sum of a subarray with length of num passed to fn
// subarray must consist of consecutive eles from or array

function maxSubarraySum(array, length) {
  let maxSum = 0;
  let tempSum = 0;

  if (array.length < length) return null;
  for (let i = length; i < array.length; i++) {
    tempSum = tempSum - arr[i - length] + arr[i];
    maxSum = Math.max(tempSUm, maxSum)
  }
  return maxSum;
}

maxSubarraySum([100, 200, 300, 400], 2) //700
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4) // 39
maxSubarraySum([-3, 4, 0, -2, 6, -1], 2) // 5
maxSubarraySum([2, 3], 3)

