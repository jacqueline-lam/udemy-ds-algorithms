/*
INTERVIEW CAKE - REVERSE WORDS

You're working on a secret team solving coded transmissions.

Your team is scrambling to decipher a recent message,
worried it's a plot to break into a major European National Cake Vault.
The message has been mostly deciphered, but all the words are backward!
Your colleagues have handed off the last step to you.

Write a function reverseWords() that takes a message as an
 array of characters and reverses the order of the words in place. ↴

- Why an array of characters instead of a string?

- The goal of this question is to practice manipulating strings in place.
Since we're modifying the message, we need a mutable ↴ type like an array,
instead of JavaScript's immutable strings.

For example:
```
const message = [ 'c', 'a', 'k', 'e', ' ',
                'p', 'o', 'u', 'n', 'd', ' ',
                's', 't', 'e', 'a', 'l' ];

reverseWords(message);

console.log(message.join(''));
// Prints: 'steal pound cake'
```

When writing your function, assume the message contains only letters and spaces,
 and all words are separated by one space.

-Gotchas-
We can do this in O(1) space. Remember, in place. ↴

We can do this in O(n) time.

If you're swapping individual words one at a time,
 consider what happens when the words are different lengths.
 Isn't each swap O(n) time in the worst case?

Notice that in addition to moving 'the' to the back and moving 'landed'
 to the front, we have to "scoot over" everything in between,
 since 'landed' is longer than 'the'.

Assume we'll be able to learn the start and end indices of all of our words in just one pass (O(n)O(n) time).

O(n^2) total time.
Why? In the worst case we have almost as many words as we have characters,
and we're always swapping words of different lengths. For example:
`"a bb c dd e ff g hh"`


THOUGHTS:
How do we figure out where words begin and end?
Once we know the start and end indices of two words,
how do we swap those two words?
-What happens when you swap two words that aren't the same length?

* Space is where the words are split
* Return an array with words reversed (edited in place)
* Method: can we use Array.splice()? — add /remove eles in place

*Maybe reverseAllLetters first and then reverse each word separated by space
We'll write a helper function reverseCharacters() that
 reverses all the characters between a leftIndex and rightIndex.
 We use it to:
1. Reverse all the characters in the entire message,
giving us the correct word order but with each word backward.
2. Reverse the characters in each individual word.

Example:
  // input: the eagle has landed
[ 't', 'h', 'e', ' ', 'e', 'a', 'g', 'l', 'e', ' ',
  'h', 'a', 's', ' ', 'l', 'a', 'n', 'd', 'e', 'd' ];

// character-reversed: dednal sah elgae eht
[ 'd', 'e', 'd', 'n', 'a', 'l', ' ', 's', 'a', 'h', ' ',
  'e', 'l', 'g', 'a', 'e', ' ', 'e', 'h', 't' ];

// word-reversed (desired output): landed has eagle the
[ 'l', 'a', 'n', 'd', 'e', 'd', ' ', 'h', 'a', 's', ' ',
  'e', 'a', 'g', 'l', 'e', ' ', 't', 'h', 'e' ];
*/


function reverseMessage(message) {
  function reverseCharacters(message, left, right) {
    // Walk towards middle from both sides
    while (left < right) {
      // swap left cahr and right char
      const temp = message[left];
      message[left] = message[right];
      message[right] = temp;
      left++;
      right--;
    }
  }
  // First - reverse all chars in entire msg
  // get right word order but each word backward
  reverseCharacters(message, 0, message.length - 1);

  // now reverse each word's char
  // we hold index of start of current word
  // as we look for end of current word
  let currentWordStartIdx = 0;
  for (let i = 0; i <= message.length; i++) {
    // end of current word - either space of end of message
    if (i === message.length || message[i] === ' ') {
      reverseCharacters(message, currentWordStartIdx, i - 1);
      // If we haven't exahusted the str, next word's start is 1 char ahead
      currentWordStartIdx = i + 1;
    }
  }
  return message;
}

/*

-Complexity-
O(n) time and O(1)O(1) space!

Hmm, the team used your function to finish deciphering the message. There definitely seems to be a heist brewing, but no specifics on where. Any ideas?

-Bonus-
How would you handle punctuation?

-What We Learned-
The naive solution of reversing the words one at a time had a worst-case O(n^2) runtime.
That's because swapping words with different lengths required
"scooting over" all the other characters to make room.

To get around this "scooting over" issue, we reversed all the characters in the
message first. This put all the words in the correct spots,
but with the characters in each word backward.
So to get the final answer, we reversed the characters in each word.
This all takes *two passes* through the message, so O(n) time total.

This might seem like a blind insight, but we derived it by using a clear strategy:

Solve a simpler version of the problem (in this case, reversing the characters
  instead of the words), and see if that gets us closer to a solution for the original problem.

We talk about this strategy in the "get unstuck" section of our coding interview tips.

*/