// Implement `atoi` which converts a string to an integer.
// The function first discards as many whitespace characters as necessary until the first non-whitespace character is found.
// Then, starting from this character takes an optional initial plus or minus sign
// followed by as many numerical digits as possible, and interprets them as a numerical value.
// The string can contain additional characters after those that
// form the integral number, which are ignored and have no effect on the behavior of this function.

// If the first sequence of non-whitespace characters in str is not a valid integral number,
// or if no such sequence exists because either str is empty or
// it contains only whitespace characters, no conversion is performed.

// If no valid conversion could be performed, a zero value is returned.

// Note:

// Only the space character ' ' is considered a whitespace character.
// Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. If the numerical value is out of the range of representable values, 231 − 1 or −231 is returned.


// Example 1:
// Input: str = "42"
// Output: 42

// Example 2:
// Input: str = "   -42"
// Output: -42
// Explanation: The first non-whitespace character is '-', which is the minus sign. Then take as many numerical digits as possible, which gets 42.

// Example 3:
// Input: str = "4193 with words"
// Output: 4193
// Explanation: Conversion stops at digit '3' as the next character is not a numerical digit.

// Example 4:
// Input: str = "words and 987"
// Output: 0
// Explanation: The first non-whitespace character is 'w', which is not a numerical digit or a +/- sign.
// Therefore no valid conversion could be performed.

// Example 5:
// Input: str = "-91283472332"
// Output: -2147483648
// Explanation: The number "-91283472332" is out of the range of a 32-bit signed integer. Thefore INT_MIN (−231) is returned.

// Example 6:
// Input: str = "+-12"
// Output: 0 // not NaN

// Example 7:
// Input: "  -0012a42"
// Output: -12 (NOT -12)

// Example 8:
// Input: "    +0 123"
// Output: 0 (NOT 123)

// Constraints:
// 0 <= s.length <= 200
// s consists of English letters (lower-case and upper-case), digits, ' ', '+', '-' and '.'.


// RUNTIME: 112 ms - beats 28%
// MEMORY: 41.1 MB
let myAtoi = function (s) {
  let idx = 0;
  let integralNums = '';
  // Skip white-space until first non-whitespace character
  while (s.charAt(idx) === ' ') idx++;

  // Check for optional +/- sign
  if (s.charAt(idx) === '+' || s.charAt(idx) === '-') {
    let sign = s.charAt(idx);
    integralNums += sign
    idx++;
  }

  // Check for consecutive integral numbers
  while (idx < s.length) {
    const char = s.charAt(idx);
    const regexp = /^[0-9 ().]$/g
    if (regexp.test(char)) {
      integralNums += char;
      idx++;
    } else {
      break;
    }
  }

  // convert str to int
  integralNums = parseInt(integralNums)

  // Test for 32-bit bounderdaries
  const INT_MAX = Math.pow(2, 31) - 1;
  const INT_MIN = Math.pow(-2, 31);
  if (integralNums > INT_MAX) return INT_MAX;
  if (integralNums < INT_MIN) return INT_MIN;
  // if NaN or undefined, return 0 (e.g. input '+-12')
  if (!integralNums) return 0;

  return integralNums;
}


let myAtoiB = function (s) {
  const MIN_INT = Math.pow(-2, 31);
  const MAX_INT = Math.pow(2, 31) - 1;
  // matches a string from start followed by zero or more ' '
  const firstWhiteSpaces = /^ */;
  // {0,1} - zero or one +/- sign removed
  // \d+ one or more digitis
  const numWithSign = /^[+,-]{0,1}\d+/;

  let s1 = s.replace(firstWhiteSpaces, '');
  //match() retrieves result of matching a str against a regular expression
  let s2 = s1.match(numWithSign);
  let result = 0;
  if (s2) {
    result = s2[0];
    let signedVal = result[0]
    if (signedVal === '-' || signedVal === '+') {
      result = result.substring(1);
    }
    result = Number(result) * (signedVal === '-' ? -1 : 1);
  }

  if (result < MIN_INT) {
    result = MIN_INT;
  } else if (result > MAX_INT) {
    result = MAX_INT;
  }
  return result;
}

const myAtoiC = s => {
  const noSpaces = s.trim();
  if (!isNaN(parseInt(noSpaces))) {
    const parsedNum = parseInt(noSpaces);
    if (parsedNum <= Math.pow(2, 31) - 1 && parsedNum >= Math.pow(-2, 31)) {
      return parsedNum;
    }
    if (parsedNum > Math.pow(2, 31) - 1) {
      return Math.pow(2, 31) - 1;
    }
    if (parsedNum < Math.pow(-2, 31)) {
      return Math.pow(-2, 31);
    }
  }
  return 0;
}

// Original Solution - incorrect trimming of white space
// let myAtoiX = function (s) {
//   // INCORRECT approach - we should NOT remove ALL white space - only until 1st non-white space char
//   // Remove white-space
//   // \s = white-space char; g = global match;
//   s = s.replace(/\s/g, '') // equal to s = s.trim()

//   // Test case for 1st char
//   let regexp = /^[0-9 ().+-]$/
//   //1st non-whitespace char is not num or +/- sign
//   if (!regexp.test(s[0])) return 0;

//   // remove chars that are non-numerical digit
//   // ^ = "anything not in this list of characters"
//   // + after the [...] group means "one or more".
//   // /gi = replace all and without regard to case
//   let numericalOnly = s;
//   for (let i = 1; i < s.length; i++) {
//     if (!regexp.test(s[i])) {
//       // slice() extracts up to but not including endIndex.
//       numericalOnly = s.slice(0, i)
//       break;
//     }
//   }
//   // let numericalOnly = parseInt(s.replace(/[^0-9 ().+-]+/gi, ''));
//   let result = parseInt(numericalOnly)
//   let max = Math.pow(2, 31) - 1, min = Math.pow(-2, 31)
//   if (result > max) return max;
//   if (result < min) return min;
//   // if NaN or undefined, return 0 (e.g. input '+-12')
//   if (!result) return 0;
//   return result;
// }