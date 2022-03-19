/*
647. Palindromic Substrings

Given a string s, return the number of palindromic substrings in it.

A string is a palindrome when it reads the same backward as forward.

A substring is a contiguous sequence of characters within the string.

Example 1:
Input: s = "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".

Example 2:
Input: s = "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

Constraints:
1 <= s.length <= 1000
s consists of lowercase English letters.

Hint #1
How can we reuse a previously computed palindrome to compute a larger palindrome?

Hint #2
If “aba” is a palindrome, is “xabax” and palindrome? Similarly is “xabay” a palindrome?

Hint #3
Complexity based hint:
If we use brute-force and check whether for every start and end position a substring is a palindrome
we have O(n^2) start - end pairs and O(n) palindromic checks.
Can we reduce the time for palindromic checks to O(1) by reusing some previous computation?
*/

// function isPalindrome(str) {
//   return (reverse(str) === str) ? true : false
// }
// function reverse(string) {
//   if (string.length <= 1) return string;
//   return reverse(string.slice(1)) + string[0];
// }

// // isPalindrome('awesome') // false
// // isPalindrome('foobar') // false
// // isPalindrome('tacocat') // true
// // isPalindrome('amanaplanacanalpanama') // true
// // isPalindrome('amanaplanacanalpandemonium') // false


// Runtime: 64 ms, faster than 97.35% of JavaScript
// Memory Usage: 43.3 MB, less than 50.35% of JavaScript
let countSubstrings = function (s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    // console.log(i)
    expand(i, i);
    expand(i, i + 1);
  }
  return count;

  function expand(l, r) {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      // console.log('l=r', l, r)
      count++;
      // console.log('count=', count)
      l--;
      // console.log('l=', l)
      r++;
      // console.log('r=', r)
    }
  }
};

// "abc"
// 0
// l=r 0 0
// count= 1
// l= -1
// r= 1
// =========
// 1
// l=r 1 1
// count= 2
// l= 0
// r= 2
// =========
// 2
// l=r 2 2
// count= 3
// l= 1
// r= 3

//  a a a
//  .
//-   .
//  . .
//-     .
//      .
//    .   3(x)

//"aaa"
// 0
// l=r 0 0
// count= 1
// l= -1
// r= 1
// l=r 0 1 -> expand(i,i+1)
// count= 2
// l= -1
// r= 2
// ==========
// 1
// l=r 1 1
// count= 3
// l= 0
// r= 2
// l=r 0 2
// count= 4
// l= -1
// r= 3
// l=r 1 2
// count= 5
// l= 0
// r= 3
// ==========
// 2
// l=r 2 2
// count= 6
// l= 1
// r= 3

// SEE THIS EXAMPLE:
//  t a c o c a t
//  .           (t)
//-   x
//  x x
//    .         (a)
//  x   x
//    x x
//      .       (c)
//    x   x
//      x x
//        .       (o)
//      .   .     (c,c)
//    .       .   (a,a)
//  .           . (t,t)
//        x x
//           .    (c)
//         x   x   (o,a)
//           x x
//             .   (a)
//           x   x   (c,t)
//             x x  (a,t)
//                . (t)
// 10 matches


//"tacocat" length = 7
// 0
// l=r 0 0 ->"t"
// count= 1
// l= -1
// r= 1
// ==========
// 1
// l=r 1 1 ->"a"
// count= 2
// l= 0
// r= 2
// ==========
// 2
// l=r 2 2 ->"c"
// count= 3
// l= 1
// r= 3
// ==========
// 3
// l=r 3 3 ->"o"
// count= 4
// l= 2
// r= 4
// l=r 2 4 ->"coc"
// count= 5
// l= 1
// r= 5
// l=r 1 5 "acoca"
// count= 6
// l= 0
// r= 6
// l=r 0 6 -> "tacocat"
// count= 7
// l= -1
// r= 7
// ==========
// 4
// l=r 4 4 -> "c"
// count= 8
// l= 3 "oca"
// r= 5
// ==========
// 5
// l=r 5 5 ->"a"
// count= 9
// l= 4
// r= 6
// ==========
// 6
// l=r 6 6 ->"t"
// count= 10
// l= 5
// r= 7
