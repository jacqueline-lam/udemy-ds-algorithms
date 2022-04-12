/*
Write an efficient function that checks whether any permutation of
 an input string is a palindrome.

You can assume the input string only contains lowercase letters.

Examples:
"civic" should return True
"ivicc" should return True
"civil" should return False
"livci" should return False

But 'ivicc' isn't a palindrome!"

If you had this thought, read the question again carefully. We're asking if any permutation of the string is a palindrome. Spend some extra time ensuring you fully understand the question before starting. Jumping in with a flawed understanding of the problem doesn't look good in an interview.

Gotchas
We can do this in O(n) time.

THOUGHTS:
- if str is odd#, all chars should be a pair except one char
- if str is even#, all chars should be pairs
 */

function permutationPalindrome(str) {
  const charHash = {};
  let oddCharFreq = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    charHash[char] = (charHash[char] || 0) + 1;
  }
  // console.log(charHash)

  for (let char in charHash) {
    const isEvenNum = length => length % 2 === 0;
    const charFreq = charHash[char];
    if (isEvenNum(str.length)) {
      // console.log('even str passed');
      if (!isEvenNum(charFreq)) return false;
    } else {
      if (!isEvenNum(charFreq)) oddCharFreq++;
      // console.log('uneven str passed')
      // console.log('oddCharFreq', oddCharFreq)
    }
  }
  if (oddCharFreq > 1) return false;
  else return true;
}

permutationPalindrome('civil');
// INPUT: "civil"
// {c: 1, i: 2, v: 1, l: 1}
// uneven str passed
// oddCharFreq 1
// uneven str passed
// oddCharFreq 1
// uneven str passed
// oddCharFreq 2
// uneven str passed
// oddCharFreq 3
// false