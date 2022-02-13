// accepts a string and returns the length of the longest subtring with all distinct chars
// Time Complexity = O(N)
findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7 - rithmsc
findLongestSubstring('thisisawesome') // 6
// s=0
// t h i s i s a w e s o m e
findLongestSubstring('bbbbbbb') // 1


// SOLUTION
function findLongestSubstring(str) {
  let maxLen = 0;
  let start = 0;
  let seen = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    if (seen[char]) {
      start = Math.max(start, seen[char]) // move window to R - 1 idx after appearence of repeated char
    }
    // maxLen = index - beginning of substring + 1 (to include current in count)
    maxLen = Math.max(maxLen, i - start + 1)
    // store the index of the next char so as to not double count
    // always update seen[char] to its latest appearing idx+1
    seen[char] = i + 1
  }
  return maxLen;
}
//i=0 1 2 3 4 5 6 7 8 9 10 11 12
// 't h i s i s a w e s o  m  e'
// 't .' seen[t] = 0 + 1; longest = 0 - start + 1 = 1;
// 't h' seen[h] = 1 + 1 = 2; longest = 1 - start + 1 = 2;
// ...'t h i s'
// 't h i s i' // start = (0 or seen[i] = 3) = 3; longest = (4 or 4 - 3 + 1 = 2) = 4; seen[i] = 5
// 't h i s i s' // start = max(3, seen[s]=i+1=6)= 6; longest = max(4, i(5) - start(4) + 1 = 2)
// 't h i s (i s a)' // start = 4; longest = max(4, i(6)-start(4)+1=3)=4; seen[a] = 7
// 't h i s (i s a w)' // start = 4; longest = max(4, i(7)-start(4)+1=4)=4; seen[w] = 8
// 't h i s (i s a w e)' //start = 4; longest = max(4, i(8)-start(4)+1=5)=5; seen[e] = 9
// 't h i s (i s (a w e )s' //* start = max(4,seen[s]=6) = 6; longest = max(5, i(9)-start(6)+1=4; seen[s]=10
// 't h i s i s [start=](a w e s o)' // start = 6; longest = max(5, i(10)-start(6)+1=5)=5; seen[o]=11
// 't h i s i s (a w e s o m) // start = 6; longest = max(5,i(11)-start(6)+1=6)= 6; seen[m]=12
// 't h i s i s a w e [start=](s o m e) // *start = max(6, seen[e]=9)=9; longest = max(6,i(12)-start(9)+1=4)= 6; seen[m]=12
// return longest = 6;

// JS solution on Leetcode
var lengthOfLongestSubstring = function (s) {
  let max_len = 0;
  let curr = 0;
  let hash = {};
  if (s.length < 2) {
    return s.length;
  }
  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] == null) {
      curr += 1;
    } else {
      curr = Math.min(i - hash[s[i]], curr + 1);
    }
    max_len = Math.max(max_len, curr);
    hash[s[i]] = i; //save the index
  }
  return max_len;
};

// 2 pointer solution on Leetcode - faster
function lengthOfLongestSubstring(str) {
  let length = str.length;
  if (length <= 1) {
    return length;
  }
  let pointer1 = 0;
  let pointer2 = 1;
  let result = 1;
  while (pointer2 < length) {
    let subStr = str.slice(pointer1, pointer2);
    // i = idx where you last found the current char
    let i = subStr.indexOf(str[pointer2]);
    if (i !== -1) {
      // char exists in subStr - move window to Right
      pointer1 = pointer1 + i + 1;
    }
    // keep incrementing pointer2 towards end of string
    pointer2++;
    result = pointer2 - pointer1 > result ? pointer2 - pointer1 : result;
  }
  return result;
};

