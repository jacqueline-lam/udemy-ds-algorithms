// Group Anagrams

// Given an array of strings strs, group the anagrams together.
//You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.


// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:
// Input: strs = [""]
// Output: [[""]]

// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]

// Constraints:
// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lower-case English letters.

// /**
//  * @param {string[]} strs
//  * @return {string[][]}
//  */

// O(NlogK) solution
let groupAnagrams = function (strs) {
  // create empty object `lookup`
  const lookup = {};

  for (let str of strs) {
    const key = [...str].sort().join('');

    if (!lookup[key]) {
      lookup[key] = [];
    }

    lookup[key].push(str);
  }

  return Object.values(lookup);
};

// Standard Anagram
let isAnagram = function (s, t) {
  // return false if length doesn't match
  if (s.length !== t.length) return false;
  // create empty object `lookup`
  const lookup = {};

  for (let i = 0; i < s.length; i++) {
    // current obj - a break down of `s`
    let letter = s[i];
    // if ltr exists, increment, otherwise, set loopup[letter]to 1
    lookup[letter] = (lookup[letter] || 0) + 1;
  }

  // loop over second str
  for (let i = 0; i < t.length; i++) {
    // if can't find  or letter = 0, return false
    let letter = t[i];
    if (!lookup[letter]) return false;
    // else decrement lookup[letter] <-- since ltr is found
    else lookup[letter]--;
  }
  // return true if every letter matches anagram requirements
  return true;

}