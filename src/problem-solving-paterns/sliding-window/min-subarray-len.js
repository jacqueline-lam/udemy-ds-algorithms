// fn accepts two parameters - an array of positive integers & a positive integer
// return minimal length of a continguous subarray of which sum >= int passed to fn
// if there isn't one, return 0
// O(N) Time Complexity and O(1) Space Complexity

function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLength = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
    if (total < sum && end < nums.length) {
      // move the window to RIGHT
      total += nums[end];
      end++;
      // if current window adds up to at least the sum given then
    } else if (total >= sum) {
      minLength = Math.min(minLength, end - start);
      // we can shrink the window
      // remove first ele of current window
      total -= nums[start];
      start++;
    } else {
      // current total < required total but we reach the end,
      // need this or else we'll be in an infinite loop
      break;
    }
  }
  return minLength === Infinity ? 0 : minLength;
}

// Approach: Move the starting idx of current subarray as soon as
// no better could be done with this idx as the starting idx
/// We could keep 2 pointer, one for the start and another for the end of the current subarray
// and make optimal moves so as to keep the total ? sum
// & maintain the lowest size possible

minSubArrayLen([2, 3, 1, 2, 4, 3], 7) //2
minSubArrayLen([2, 1, 6, 5, 4], 9) //2
minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52) //1
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95) //0