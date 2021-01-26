// Given two strings s and t , write a function to determine if t is an anagram of s.
// ANAGRAM = a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

// Example 3:
// Input: s = "", t = ""
// Output: true

// Note:
// You may assume the string contains only lowercase alphabets.
// FOLLOW UP:
// What if the inputs contain unicode characters?
// How would you adapt your solution to such case?

// Frequecy Counter Solution
// Runtime: 96 ms - beats 67% of submissions
// Memory Usage: 39.8 MB - beats 92%
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
// JS unicode single line solution
let isAnagramB = function (s, t) {
  return [...s].sort().join('') === [...t].sort().join('')
};