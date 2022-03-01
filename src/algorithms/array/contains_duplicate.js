// Given an array of integers, find if the array contains any duplicates.
// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Example 1:
// Input: [1,2,3,1]
// Output: true

// Example 2:
// Input: [1,2,3,4]
// Output: false

// Example 3:
// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true

// frequency counter approach
// O(N) time and O(N) space
// space used by hash table is linear with # of eles in it
let containsDuplicate = function (nums) {
  let frequencyCounter = {};
  for (let num of nums) {
    if (!frequencyCounter[num]) {
      frequencyCounter[num] = 1;
    } else {
      return true;
    }
  }
  return false;
}

containsDuplicate([1, 2, 3, 4]) // false
containsDuplicate([1, 2, 3, 1]) // true
containsDuplicate([0]) // false
