// Given a non-empty array of integers nums, every ele appears twice except for one.
// Find that single one.
// Could you implement a solution with a linear runtime complexity and without using extra memory?

// Example 1:
// Input: nums = [2,2,1]
// Output: 1

// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4

// Example 3:
// Input: nums = [1]
// Output: 1

//96ms
// O(2N) Time - 2 loops over entire size of array (1000 ele = 2000 iterations)
let singleNumber = function (nums) {
  let frequencyCounter = {};
  for (let num of nums) {
    frequencyCounter[num] = (frequencyCounter[num] || 0) + 1;
  };

  for (let key in frequencyCounter) {
    if (frequencyCounter[key] === 1) {
      return key;
    };
  };
  return undefined;
}

// Time: 80ms
// using SET -> Set objects are collections of values.
// You can iterate thru elements of a set in insertion order
// A value in the Set may only occur once; it is unique in the Set's collection
let singleNumberB = function (nums) {
  let set = new Set();
  // iterate thru array and check if the ele is in the set
  for (num of nums) {
    // if in set, remove num from set
    if (set.has(num)) {
      set.delete(num);
    } else {
      set.add(num); // add single ele to set
    }
  }
  // there should only be 1 ele in set at the end
  // return whichever remaining ele in the set
  // Array.from = static method creates a new, shallow-copied Array instance from an array-like or iterable object

  return Array.from(set)[0];
};


//Time: 80ms
let singleNumberC = function (nums) {
  return nums.reduce((acc, val) => acc ^ val, 0)
};

