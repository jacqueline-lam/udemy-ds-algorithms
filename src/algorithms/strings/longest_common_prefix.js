// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:
// 0 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.


// keep track of `longest` prefix str
// if strs.length === 0 return 0
// else
// iterate through each letter in word/ str
// Another for-loop to compare with letters at str[i+1]
// if index > word.length or comparsionLtr not equal to currentLtr -> return longest
// increment comparision index
// add value of the comparsionLtr (right operand) to longest
// return '' if no common prefix

// 84MS runtime; 39.4 Memory
let longestCommonPrefix = function (strs) {
  let longest = '';
  //edge case
  if (strs.length === 0) return longest;

  // first word
  let comparisonWord = strs[0];
  let comparisonIdx = 0;

  // Iterate through EACH letter of word
  for (let comparisonLtr of comparisonWord) {
    // Iterate thru strs -> from next word to last str/word
    // to compare SPECIFIC letter of str1, str2, str3 and so on
    for (let i = 1; i < strs.length; i++) {
      let currentWord = strs[i];
      // current letter based on idx of comparisonWord
      let currentLtr = currentWord.charAt(comparisonIdx)

      // return longest if idx that we're comparing exceeds length of currentWord
      // or the comparisonLtr (prev letter) does not match currentLtr
      if (comparisonIdx > currentWord.length || comparisonLtr !== currentLtr) {
        return longest;
      }
    }
    // move on to next letter
    comparisonIdx++;
    // apend matching letter to results
    longest += comparisonLtr;
  }
  return longest; // ifC words have the same length and letters are all matching at the end
};

//72 ms submission
let longestCommonPrefixB = function (strs) {
  // edge
  let prefix = "";
  // if (strs.length == 0) return "";
  // if (strs.length == 1) return strs[0];
  if (!strs || !strs.length) return prefix; // two lines of code in one

  // sort strs in ascending order (comparing value of length properties)
  // strs.sort((a, b) => a.length - b.length); // by increasing length
  strs.sort(); // ascending order by alphabets

  for (let i = 0; i < strs[0].length; i++) {
    // compare charAt first str with charAt last str
    if (strs[0][i] === strs[strs.length - 1][i]) prefix += strs[0][i];
    else return prefix;
  }

  return prefix;

};