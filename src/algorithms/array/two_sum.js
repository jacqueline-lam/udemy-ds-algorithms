// Given an array of integers `nums` and an integer `target`,
// return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// O(N) time and O(N) space
// traverse list containing n elements twice O(2N) + hash look up time = O(1) = O(N)
// extra space depends on # of items in hash = n elements

// Two-pass Hash
let twoSum = function (nums, target) {
  let numsHash = {};

  for (let i = 0; i < nums.length; i++) {
    numsHash[nums[i]] = i;
  };

  for (let j = 0; j < nums.length; j++) {
    let complement = target - nums[j];
    // check if ele's complement exists in hash
    // make sure complement is not nums[j] itself
    if (numsHash.hasOwnProperty(complement) && numsHash[complement] !== j) {
      return [j, numsHash[complement]];
    }
  };

  // Incorrect to loop through hash -
  // -> won't be able to differ the index of the two 3s
  // -> idx is value of hash[key] - only 1 appearence (last 3)

  // for (let key in numsHash) {
  //   let complement = target - key;
  //   let idx = numsHash[key];

  //   if (numsHash.hasOwnProperty(complement) && numsHash[complement] !== idx) {
  //     answer.push(idx, numsHash[complement])
  //     return answer; // return now to avoid duplicate [xIdx, yIdx, yIdx, xIdx]
  //   }
  // }

  // Solution 2
  let twoSum = function (nums, target) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
      let num = nums[i];
      if (map.get(num) === undefined) map.set(target - num, i);
      else return [map.get(num), i];
    }
  };

};

twoSum([3, 2, 4], 6) // [1,2]
// 3 2 4 -> {2:1, 3:0, 4:2}
twoSum([3, 3], 6) // [0,1]
// {3:1} // value will equal idx of last 3 in array