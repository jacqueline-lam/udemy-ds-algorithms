/*
SORTING & SEARCHING - TOP SCORES

You created a game that is more popular than Angry Birds.

Each round, players receive a score between 0 and 100,
which you use to rank them from highest to lowest.
So far you're using an algorithm that sorts in O(NlogN) time,
but players are complaining that their rankings aren't updated fast enough.
You need a FASTER SORTING ALGORITHM.

Write a function that takes:
1) an array of unsortedScores
2) the highestPossibleScore in the game
and returns a sorted array of scores in less than O(NlogN) time.

For example:
```
const unsortedScores = [37, 89, 41, 65, 91, 53];
const HIGHEST_POSSIBLE_SCORE = 100;
sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE);
// returns [91, 89, 65, 53, 41, 37]
```

We’re defining n as the number of unsortedScores because we’re expecting
 the number of players to keep climbing.

And, we'll treat highestPossibleScore as a constant instead of
factoring it into our big O time and space costs because the
highest possible score isn’t going to change.
Even if we do redesign the game a little, the scores will stay around the same order of magnitude.

Multiple players can have the same score!
If 10 people got a score of 90, the number 90 should appear 10 times in our output array.

We can do this in O(n)O time and space.
One common way to get O(n) runtime is to use a greedy algorithm.
 But in this case we're not looking to just grab a specific value from our input set
 (e.g. the "largest" or the "greatest difference")—
 we're looking to REORDER THE WHOLE SET. That doesn't lend itself as well to a greedy approach.

Another common way to get O(n) runtime is to use COUNTING.
We can build an array scoreCounts where the indices represent scores and
the values represent how many times the score appears.
Once we have that, can we generate a sorted array of scores?

*/

// returns a sorted array of scores in less than O(NlogN) time
// Counting sort solution
// O(N) Time and Space, where n = number of scores
function sortScores(unorderedScores, highestPossibleScores) {

  const scoreCounts = new Array(highestPossibleScores + 1).fill(0);

  // Populate scoreCounts
  unorderedScores.forEach(score => {
    scoreCounts[score]++;
  });

  // Populate final sorted array
  const sortedScores = [];

  // For each item in scoreCounts
  for (let score = highestPossibleScores; score >= 0; score--) {
    const count = scoreCounts[score];

    // For the number of times the item occurs
    // This will not cause O(n^2) because count is pretty much constant -> O(N+K)
    for (let time = 0; time < count; time++) {
      sortedScores.push(score);
    }
  }

  return sortedScores;
}

/*
Why nesting two loops towards the bottom !== O(n^2)?
  The outer loop runs once for each unique number in the array.
  The inner loop runs once for each time that number occurred.

  So in essence we're just looping through the n numbers from our input array,
  except we're splitting it into TWO STEPS:
  (1) each unique number, and
  (2) each time that number appeared.

  Here's another way to think about it:
  in each iteration of our two nested loops, we append one item to sortedScores.
  *How many numbers end up in sortedScores in the end? Exactly how many were in our input array! -> n*

  If we didn't treat highestPossibleScore as a constant,
  we could call it k and say we have O(n+k) time and O(n+k) space.

  Bonus:
  - Note that by optimizing for time we ended up incurring some space cost! What if we were optimizing for space?
  - We chose to generate and return a separate, sorted array.
    Could we instead sort the array in place? Does this change the time complexity? The space complexity?


*/