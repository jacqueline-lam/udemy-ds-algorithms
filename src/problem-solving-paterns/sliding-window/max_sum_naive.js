function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  // if arr is all -ve numbers, biggest sum will still be -ve
  var max = -Infinity;
  // make sure we hit end of our array with our sum
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    // 1st loop: update max to be sum of first 3 digits
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)
//                                   end

// long array => find largest sum of 20 digits => inefficient