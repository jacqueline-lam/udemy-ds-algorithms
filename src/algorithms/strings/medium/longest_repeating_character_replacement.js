/*
424. Longest Repeating Character Replacement

You are given a string s and an integer k.
You can choose any character of the string and
change it to any other uppercase English character.
You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get
after performing the above operations.

Example 1:
Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.

Example 2:
Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.

Constraints:
1 <= s.length <= 105
s consists of only uppercase English letters.
0 <= k <= s.length

THOUGHTS:
* s can be any uppercase char A-Z
* need to find freq of a char, but has to be somewhat contingous
* var longest to save longest substr so far
* a hash to store visited chars

* Maintain L and R pointer, max instances of a single char, and visit counts for each char (HASH).
* for each char in string
  *increment visit count for this char
  *if new visit count is higher than max, update max
  *if length of current string without max char count is greater than k,
    then we know the new char made it such that there are more chars missing than can be replaced by k,
    so we will remove the first char
    and increment L pointer
  * increment R pointer to look at next char.

* In the end, the answer is whatever the window size is. This is because we never shrink the window size.
  * As we look at new chars, we increase the window size.
  * Once we see we can no longer increase due to limitation of k, we slide the window forward.
    *In these inbetween states, it's possible the window doesn't span a valid subset,
      *but that doesn't matter because the window size at one point did span a valid set.
  * Instead, we wait until there's a possibility of a better set,
  * which is when there is a substring with more instances of some char.

*/

// Sliding window, hash

// Runtime: 102 ms, faster than 70.32% of JavaScript
// Memory Usage: 42.4 MB, less than 68.06% of JavaScript
const characterReplacement = (s, k) => {
  const visited = {};
  let left = 0;
  let maxCharFreq = 0;
  let longest = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    // Increment count of letter (expanding the window)
    visited[char] = (visited[char] || 0) + 1

    // Number of the most frequent letter in the window
    maxCharFreq = Math.max(maxCharFreq, visited[char])

    // Window length - num of most frequent letter gives us
    // (r-l+1 - maxCharFreq) = number of letters that need to be replaced.
    // If > k, we need to shrink the window
    // new char -> there are more chars missing than can be replaced by k,
    // so we will remove the first char and increment left pointer
    if ((right - left + 1) - maxCharFreq > k) {
      visited[s[left]]--;
      left++;
    }

    // See if the current window is longer than the current max
    longest = Math.max(longest, (right - left + 1));
  }
  return longest;
}

// characterReplacement("AABABBA",1)
// char = "A" -> visited['A'] = 0 -> maxCharFreq = Math.max(0,1)=1
//  (r=0-l=0+1)=1 - 1 = 0 NOT > k=1
// longest = 1, r=1

//char = 'A" -> visited['A'] = 2 -> maxCharFreq = 2
// (r(1)-l(0)+1)- 2= 0 NOT > k
// longest = 2, r=2

// char = 'B' -> visited['B'] = 1 -> maxCharFreq = 2
// (r=2-l=0+1)=3 - maxCharFreq=2 = 1
// longest = 3, r=3

// char = 'A' -> visited['A'] = 3 -> maxCharFreq = 3
// (r=3-l=0+1)=4 - maxCharFreq=3 = 1
// longest = 4, r=4

// char = 'B' -> visited['B'] = 2 -> maxCharFreq = 3
// (r=4-l=0+1)=5 - maxCharFreq=3 = 2 > k=1 -> visited[s[0]-> 'A']-- =2; l++ (1)
// longest = Math.max(4, r4-l1+1 = 4) = 4, r=5

// char = 'B' -> visited['B'] = 3 -> maxCharFreq = 3
// (r5-l1+1)=5 - maxCharFreq=3 = 2 > k=1 -> visited[s[1]-> 'A']-- =1; l++ (2)
// longest = Math.max(4, r5-l2+1 = 4) = 4, r=6

// char = 'A' -> visited['A'] = 2 -> maxCharFreq = 3
// (r6-l2+1)=5 - maxCharFreq=3 = 2 > k=1 -> visited[s[2]-> 'B']-- =2; l++ (3)
// longest = Math.max(4, r6-l3+1 = 4) = 4

// RETURN 4

