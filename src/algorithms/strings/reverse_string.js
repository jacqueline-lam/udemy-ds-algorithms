// Write a function that reverses a string.
// The input string is given as an array of characters char[].
// Do NOT allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// You may assume all the characters consist of printable ascii characters.


// Example 1:
// Input: ["h","e","l","l","o"]
// i=0,              j=s.length-1= 4
// ["h","e","l","l","o"]
// o  e  l  l  h
//   i=1    j=3
// o  l  l  e  h
//     i=2,j=2
// o  l  l  e  h
// Output: ["o","l","l","e","h"]

// Example 2:
// Input: ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

// TWO-POINTER APPROACH
let reverseString = function (s) {
  let start = 0;
  let end = s.length - 1;
  while (start < end) {
    if (end > start) {
      let temp = s[start];
      s[start] = s[end];
      s[end] = temp;
      start++;
      end--;
    }
  }
  return s;
}