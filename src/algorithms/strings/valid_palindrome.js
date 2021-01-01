// Given a string, determine if it is a palindrome, (read the same backward as forward)
// considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:
// Input: "A man, a plan, a canal: Panama"
// Output: true

// Example 2:
// Input: "race a car"
// Output: false

// Example 3:
// Input: ""
// Output: true

// Constraints:
// s consists only of printable ASCII characters.


// 2-pointer approach from opposite ends?
// Time = O(N) - 80ms (beats 98%)
// Space = O(1) - 40.2MB
let isPalindrome = function (s) {
  // /w = [A-Za-z0-9_], + quantifier match ≥1 char, * accept an empty string
  // ^ = "anything not in this list of characters"
  // + after the [...] group means "one or more".
  // /gi = replace all and without regard to case

  let alphaNumeric = /[^a-zA-Z0-9]+/gi
  // remove non-alphanumeric chars and convert str to lowercase
  s = s.replace(alphaNumeric, '').toLowerCase();

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) { //s.charAt(left) !== s.charAt(right)
      return false;
    }
    left++;
    right--;
  }
  return true;
};