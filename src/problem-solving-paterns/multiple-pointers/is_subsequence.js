// takes in 2 strings and check whether the chars in str1
// form subsequence of chars in str2
// fn should check whether str1 appear somewhere in str2, w/o order changing

// TIME = O(N+M); SPACE = O(1)
function isSubsequence(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;

  // recursions - Recursive but not O(1) Space
  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
  // if char doesn't match, continue comparing char at str1 w/ next char in str2
  return isSubsequence(str1, str2.slice(1))
}

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra') // true
isSubsequence('abc', 'acb') // false (order matters)



// Iterative Solution - O(1) Space
// isSubsequence Solution - Iterative
function isSubsequenceB(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    // No remaining char to evaluate in str1 (all chars have been matched in str2)
    if (i === str1.length) return true;
    j++;
  }
  return false;
}