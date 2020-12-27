// First Unique Character in a String

// Given a string, find the first non-repeating character in it
// and return its index. If it doesn't exist, return -1.

// Examples:
// s = "leetcode"
// return 0.
// s = "loveleetcode"
// return 2.

// Note: You may assume the string contains only lowercase English letters.
// Runtime: 116 ms
// Memory Usage: 42.7 MB
// O(N) time - go thru str of length N 2 times and O(1) space
let firstUniqChar = function (s) {
  let freqCounter = {};

  // populate freqCounter with letter and frequency
  for (let char of s) {
    freqCounter[char] = (freqCounter[char] || 0) + 1
  }

  for (let i = 0; i < s.length; i++) {
    let char = s[i] // s.charAt(i)
    if (freqCounter[char] === 1) return i;
  }
  // non-repeating char doesn't exist, return -1
  return -1;
};

// Solution 2 - use indexOf(searchValue, fromIndex)
// 96ms - O(N) time and O(1) space
let firstUniqCharB = function (s) {
  for (let i = 0; i < s.length; i++) {
    const prev = s.indexOf(s[i], 0); // from start of str
    const next = s.indexOf(s[i], i + 1);
    // prev = currentIdx and no add'l occurane
    if (prev === i && next === -1) {
      return i;
    }
  }
  return -1;
};