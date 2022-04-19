/*
SORTING, SEARCHING ALGORITHMS
- ROTATION POINT

I want to learn some big words so people think I'm smart.

I opened up a dictionary to a page in the middle and started flipping through,
looking for words I didn't know.
I put each word I didn't know at increasing indices in a huge array I created in memory.
When I reached the end of the dictionary, I started from the beginning and
did the same thing until I reached the page I started at.

Now I have an array of words that are mostly alphabetical,
except they start somewhere in the middle of the alphabet, reach the end,
and then start from the beginning of the alphabet.
In other words, this is an alphabetically ordered array that has been "rotated." For example:

  const words = [
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'asymptote',  // <-- rotates here!
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
];

Write a function for finding the index of the "rotation point,"
which is where I started working from the beginning of the dictionary.
This array is huge (there are lots of words I don't know) so we want to be efficient here.

To keep things simple, you can assume all words are lowercase.

Gotchas
We can get O(logN) time.

Breakdown:
The array is *mostly ordered*. We should exploit that fact.

What's a common algorithm that takes advantage of the fact that an array is sorted to find an item efficiently?

Binary search! We can write an adapted version of binary search for this.

In each iteration of our binary search, how do we know if the rotation point is to our left or to our right?

Try drawing out an example array!

  words = ['k', 'v', 'a', 'b', 'c', 'd', 'e', 'g', 'i'];
                                ^

If our "current guess" is the middle item, which is 'c' in this case,
is the rotation point to the left or to the right? How do we know?

Notice that every item to the right of our rotation point is always
 alphabetically before the first item in the array.

**So the rotation point is to our left if the current item is less than the first item.
Else it's to our right.**

*/

// At each iteration, we go R if curr item is > first item, we go L if < first item

// keep track of lower & upper bounds on rotation points - floorIdx & ceilingIdx
// when floorIdx & ceilingIdx are directly next to each other,
// floor = last item we added before starting from beginning of dictionary,
//  and ceiling is the first item we've added after

// words = ['k', 'v', 'a', 'b', 'c', 'd', 'e', 'g', 'i'] // length = 9, ceilingIdx = 8
//         floorIdx(0)         mid(4)              ceilingIdx(8)
//          c < k — ceiling = mid = 4
//          a < k - ceiling = mid = 2
//          v > k - floor = mid = 1, ceiling still = 2
//          floor(1)+ 1 = 2 = ceiling(2) -> break as we've flipped to beginning at ceiling

function findRotationPoint(words) {
  const firstWord = words[0];

  let floorIdx = 0;
  let ceilingIdx = words.length - 1;

  while (floorIdx < ceilingIdx) {
    // Guess a point halfway between floor and ceiling
    const midIdx = Math.floor(floorIdx + ((ceilingIdx - floorIdx) / 2));

    // If guess comes after first word or IS the first word (2 words only = 0+ 1/2 = 0)
    if (words[midIdx] >= firstWord) {
      // go RIGHT
      floorIdx = midIdx;
    } else {
      // go LEFT
      ceilingIdx = midIdx;
    }

    // If floor and ceiling have converged
    if (floorIdx + 1 === ceilingIdx) {
      // Between floor and ceiling is where we flipped to beginning
      // so ceiling is alphabetically first
      break;
    }
  }
  return ceilingIdx;
}

/*
Time Complexity: O(logN) iterations and each iteration is O(1) time
Each time we go through the while loop,
we cut our range of indices in half, just like binary search.

In each loop iteration, we do some arithmetic and a string comparison.
The arithmetic is constant time, but the string comparison requires looking at characters
 in both words—every character in the worst case.
 Here, we'll assume our word lengths are bounded by some constant
  so we'll say the string comparison takes constant time.

O(logN) iterations and each iteration is O(1) time -- therefore O(logN) time complexity.

Space complexity: O(1) space to store first word and the floor and ceiling indices.

-----------
Bonus:
This function assumes that the array is rotated.
If it isn't, what index will it return?
How can we fix our function to return 0 for an unrotated array?

What We Learned:
modified version of binary search.

Example of the difference between "knowing" something and knowing something.
You might have seen binary search before, but that doesn't help you much unless
you've learned the lessons of binary search.

*Binary search teaches us that when an array is sorted or mostly sorted:*
1) The value at a given index tells us a lot about what's to the left and what's to the right.
2) We don't have to look at every item in the array.
By inspecting the middle item, we can "rule out" half of the array.
3) We can use this approach over and over, cutting the problem in half
until we have the answer. This is sometimes called "divide and conquer."
So whenever you know an array is sorted or almost sorted, consider binary search and see if they apply.
*/