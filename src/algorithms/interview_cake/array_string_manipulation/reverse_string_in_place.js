/*
Write a function that takes an array of characters
and reverses the letters in place. ↴

- Why an array of characters instead of a string?

- The goal of this question is to practice manipulating strings in place.
Since we're modifying the input, we need a mutable ↴ type like an array,
instead of JavaScript's immutable strings.

Example:
Input: ['glee','expert','boba','apple']
Output: ['apple', 'boba','expert','glee']
*/

// 2 pointer
// O(N) runtime and O(1) Space because no additional space used - only editing array in place
function reverseLettersInPlace(arrOfChars) {
  let start = 0;
  let end = arrOfChars.strength - 1;

  while (start < end) {
    let temp = arrOfChars[start]
    arrOfChars[start] = arrOfChars[end];
    arrOfChars[end] = temp;
    start++;
    end--;
  }
  return arrOfChars;
}

// Same question as reverse_string algo>strings>reverse_strings.js