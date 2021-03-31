// Last Occurance of Character in a String

// Given a string, find the last non-repeating character in it
// and return the uniq string

// Example 1: "banana" -> "(b)ana(n)(a)" -> "bna"
let lastUniqChar = function (s) {
  let freqCounter = {};
  // populate freqCounter with letter and latest occuring idx
  for (let char of s) {
    freqCounter[char] = s.indexOf(char)
  }
  let sortedArr = freqCounter.sort((a, b) => a[1] - b[1]);
  sortedArr.forEach(subArr => uniqStr += subArr[0])
  return uniqStr;
};