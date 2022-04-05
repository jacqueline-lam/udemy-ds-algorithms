// Last Occurance of Character in a String

// Given a string, find the last non-repeating character in it
// and return the uniq string

// Example 1: "banana" -> "(b)ana(n)(a)" -> "bna"

let lastUniqChar = function (s) {
  let freqCounter = {};
  let uniqStr = '';
  // populate freqCounter with letter and latest occuring idx
  for (let i = 0; i < s.length; i++) {
    freqCounter[s[i]] = i
  }; // {b: 0, a: 5, n: 4}

  let sortedArr = Object.entries(freqCounter).sort((a, b) => a[1] - b[1]);
  // [['b', 0], ['n',4], ['a',5]
  sortedArr.forEach(subArr => uniqStr += subArr[0]);

  return uniqStr;
};