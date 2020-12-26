// Given a 32-bit signed integer, reverse digits of an integer.

// Note:
// Assume we are dealing with an environment that could only store integers
// within the 32-bit signed integer range: [−2^31,  2^31, − 1].
// For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21

// Example 4:
// Input: x = 0
// Output: 0

// Pseudocode
// turn x into str and split into array
// if start is 0, remove integer 0
// if split x.length = 1 and int = 0 , return 0

let reverseIntA = function (x) {
  let converted = x.toString().split('');
  let upperLimit = Math.pow(2, 31);
  let lowerLimit = -1 * upperLimit;
  let reversed;

  if (x === 0) return 0;
  // no need to remove 0 because parseInt('0020') = 20
  // while (converted[converted.legnth - 1] === '0') {
  //   converted.pop();
  // }
  if (x < 0) {
    converted.reverse().pop();
    reversed = parseInt(converted.join('') * -1);
  } else {
    reversed = parseInt(converted.reverse().join(''));
  }
  return reversed > lowerLimit && reversed < upperLimit ? reversed : 0;
};

// Refactored - 80MS
let reverseIntB = function (x) {
  const max = Math.pow(2, 31) - 1;
  const min = Math.pow(-2, 31);
  const sign = Math.sign(x);
  // convert x to str -> arr then reverse -> str
  const num = (x * sign).toString().split('').reverse().join('');
  // convert to negative if needed
  const result = parseInt(num) * sign
  return result > min && result < max ? result : 0;
}