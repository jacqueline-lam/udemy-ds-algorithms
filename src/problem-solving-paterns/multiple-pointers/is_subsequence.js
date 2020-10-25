// takes in 2 strings and check whether the chars in str1
// form subsequence of chars in str2
// fn should check whether str1 appear somewhere in str2, w/o order changing

// TIME = O(N+M); SPACE = O(1)
function isSubsequence(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;

  // recursions
  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
  // if char doesn't match, continue comparing char at str1 w/ next char in str2
  return isSubsequence(str1, str2.slice(1))
}

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra') // true
isSubsequence('abc', 'acb') // false (order matters)























function isSubsequence(str1, str2) {
  if (str1.length === 0) return true
  if (str2.length === 0) return false
  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))
  return isSubsequence(str1, str2.slice(1))
}