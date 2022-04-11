/*
You've built an inflight entertainment system with on-demand movie streaming.

Users on longer flights like to start a second movie right when their first one ends,
but they complain that the plane usually lands before they can see the ending.
So you're building a feature for choosing two movies whose total runtimes will equal the exact flight length.

Write a function that takes an integer `flightLength` (in minutes) and
an array of integers `movieLengths` (in minutes)
and returns a boolean indicating whether there are two numbers in `movieLengths`
whose sum equals `flightLength`.

When building your function:
* Assume your users will watch exactly two movies
* Don't make your users watch the same movie twice
* Optimize for runtime over memory

O(N) time, where N is length of movieLength
Rmb: users shouldn't watch same movie twice.

BREAKDOWN:
Brute Force: nest 2 loops (outer choosing firstMovieLength, inner choosing secondMovieLength)
That'd give us O(N^2) runtime
-> Replace inner loop with somethng faster
-> Can sort movieLengths first, then use Binary Search to find secondMovieLength in O(logN) time instead of O(N).
But sorting would cost O(NlogN) time > O(N)
* Check for existence of secondMovieLength in O(1) constant lookup time?
- using a SET - either two pass - to populate hash and then loop thru firstMoviesLength with a check in our set or 1 pass

1 pass through movieLength, treating each item as the firstMovieLength;
At each iteration:
1. see if there's `targetSecondMovieLength` we've seen already (stored in set)
2. Keep movieLengthsSeen set up to date by throwing in `currMovieLength`
*/

// O(N) time and O(N) space - added a bit of space cost by optimizing runtime
// Access movies by length, in O(1) time
function canTwoMoviesFillFlight(movieLengths, flightLength) {
  // set to store unique movie lengths we've seen so far
  const movieLengthsSeen = new Set();

  for (let i = 0; i < movieLengths; i++) {
    const currMovieLength = movieLengths[i];
    const targetSecondMovieLength = flightLength - currMovieLength;

    // we know users won't watch same movie twice by checking movieLengthsSeen before we've put currMovieLength in it
    if (movieLengthsSeen.has(targetSecondMovieLength)) {
      return true;
    } else {
      movieLengthsSeen.add(currMovieLength);
    }
  }
  // iterated over all movies and did not find match
  return false;
}
