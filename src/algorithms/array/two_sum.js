// Given an array of integers `nums` and an integer `target`,
// return indices of the two numbers such that they add up to target.

// You may assume that each input would have EXACTLY ONE SOLUTION, and you may NOT USE SAME ELEMENT TWICE.
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

// Two-pass Hash - 88ms
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

  // Solution 2 - 80ms - One-pass Map
  //  Map object holds key-value pairs and remembers the original insertion order of the keys.
  // Any value (both objects and primitive values) may be used as either a key or a value
  // While we iterate & insert eles into the table,
  // we also look back to check if current element's complement already exists in the table.
  // If it exists, we have found a solution and return immediately.

  // O(N) TIME
  // O(N) SPACE
  let twoSumB = function (nums, target) {
    let numberIdx = new Map();
    let result = [];

    for (let i = 0; i < nums.length; i++) {
      let num = nums[i];
      let complement = target - num;
      if (numberIdx.has(complement)) {
        result[0] = numberIdx.get(complement)
        result[1] = i;
        return result;
      }
      numberIdx.set(num, i);
    }
  };

  // Solution 3 - faster 76ms - One-pass Hash
  let twoSumC = function (nums, target) {
    let numIdx = {}
    for (let i = 0; i < nums.length; i++) {
      let complement = target - nums[i]
      if (complement in numIdx) {
        return [numIdx[complement], i]
      }
      numIdx[nums[i]] = i;
    }
  }

};

twoSum([3, 2, 4], 6) // [1,2]
// 3 2 4 -> {2:1, 3:0, 4:2}
twoSum([3, 3], 6) // [0,1]
// {3:1} // value will equal idx of last 3 in array


// PROBLEM SOLVING PROCESS

// 1) Understand Problem
//  twoSum fn takes arr of nums and an int target - return indices of two nums with sum = target
// input: nums will be unique , only one pair will add up to target (ONLY 1 VALID ANSWER)
// output: [idx1, idx2] with sum = target
// determined by - looping thru nums to store num,idx as k,v in obj
// look up to see target-num exists in obj
// edge case: aware - same num can be used twice

//89ms - O(N)
function twoSumPractice(nums, target) {
  // populate obj with num,idx pairs
  let numObj = {};
  for (let i = 0; i < nums.length; i++) {
    numObj[nums[i]] = i;
  }
  // check if target is key in obj
  for (let j = 0; j < nums.length; j++) {
    let complement = target - nums[j];
    // make sure complement !=== current num
    // numObj.hasOwnProperty(complement) - will avoid error
    if (numObj[complement] && numObj[complement] !== j) {
      return [j, numObj[complement]];
    }
  }
}

// refactor - perhaps one pass hash - lookup for complement
function twoSumPracticeRefactor(nums, target) {
  let numObj = {};
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    // make sure complement !=== current num
    // if (numObj[complement]) { // this causes error beacuase 2:0 (0 idx boolean = Falsey)
    // check if key exists in array instead
    if (complement in numObj) {
      return [numObj[complement], i];
    }
    numObj[nums[i]] = i;
  }
}