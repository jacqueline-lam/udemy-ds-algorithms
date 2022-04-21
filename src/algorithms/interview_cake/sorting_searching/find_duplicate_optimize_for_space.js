/*
SORTING AND SEARCHING
Find a duplicate, Space Edition.

We have an array of integers, where:
1) The integers are in the range 1..n
2) The array has a length of n+1

It follows that our array has at least one integer which appears at least twice.
But it may have several duplicates,
and each duplicate may appear more than twice.

*Write a function which finds an integer that appears more than once in our array.*
Don't modify the input! (If there are multiple duplicates,
  you only need to find one of them.)

We're going to run this function on our new, super-hip MacBook Pro With Retina Display™.
Thing is, the damn thing came with the RAM soldered right to the motherboard,
 so we can't upgrade our RAM. So we need to OPTIMIZE FOR SPACE!

O(1) Space and less than O(N^2) Time.
— O(NlogN) time and O(1) Space. Do this without modifying input.
O(NLogN) algos double something or cut something in half.
 How can we rule out half of the nums each time we iterate thru an array?
*/

// O(N) time and O(N) space approach
function findRepeat(numbers) {
  const numbersSeen = new Set();
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (numbersSeen.has(number)) return number;
    numbersSeen.add(number);
  }
  // no duplicate if num not found
  throw new Error('no duplicate!');
}

// Burte force approach taking each num in the range 1...n, and walk thru arr to see if it appears twice
// O(1) Space but O(N^2) Time!
function findRepeatBruteForce(numbers) {
  for (let needle = 1; needle < numbers.length; needle++) {
    let hasBeenSeen = false;

    for (let i = 0; i < numbers.length; i++) {
      const number = numbers[i];
      if (number === needle) {
        if (hasBeenSeen) return number;
        else hasBeenSeen = true; // num seen once
      }
    }
  }
  // no duplicate found
  throw new Error('no duplicate!');
}

// Sorting takes O(NlogN) time.
// If we sorted arr, any duplicates would be right next to each other
// sort in place to avoid add'l O(N) space

// 1. Do an in-place sort of the array (for example an in-place merge sort).
// 2. Walk through the now-sorted array from left to right.
// 3. Return as soon as we find two adjacent numbers which are the same.

// "we have more items than we have possibilities, so we must have ≥1 repeat"
// sometimes called the pigeonhole principle.


/*
Approach: similar to a binary search, except we divide the
range of possible answers in half at each step,
rather than dividing the array in half.

1) Find the number of integers in our input array which lie within the range 1..n/2.
2) Compare that to the number of possible unique integers in the same range.
3) If the number of actual integers is greater than the number of possible integers,
 we know there’s a duplicate in the range 1..n/2,
  so we iteratively use the same approach on that range.
4) If the number of actual integers is NOT GREATER THAN the number of possible integers,
we know there must be duplicate in the range n/2 + 1..n,
 so we iteratively use the same approach on that range.
5) At some point, our range will contain just 1 integer,
which will be our answer.

The sum of the subarrays' numbers of elements is n+1
(the number of elements in the original input array) and
 the sum of the subarrays' numbers of possible distinct integers is n
  (the number of possible distinct integers in the original input array).

Since the sums of the subarrays' numbers of elements must be 1 greater than
the sum of the subarrays' numbers of possible distinct integers,
one of the subarrays must have at least one more element than it
 has possible distinct integers.

Complexity:
O(1) space and O(nlogn) time.
* We can actually do even better,
getting our runtime down to O(n) while keeping our space cost at O(1).
The solution is NUTS; it's probably outside the scope of what most interviewers would expect.


Bonus:
This function always returns one duplicate, but there may be several duplicates.
Write a function that returns all duplicates.

What We Learned:
Our answer was a modified binary search.
We got there by reasoning about the expected runtime:
1) We started with an O(n^2) "brute force" solution and wondered if we could do better.
2) We knew to beat O(n^2) we'd probably do O(n) or O(nlogn), so we started thinking
of ways we might get an O(nlogn) runtime.
3) log(n) usually comes from iteratively cutting stuff in half,
so we arrived at the final algorithm by exploring that idea.

Starting with a target runtime and working backward from there
can be a powerful strategy.
 */

function findRepeat(numbers) {
  let floor = 1;
  let ceiling = numbers.length - 1;

  while (floor < ceiling) {
    // Divide our range 1..n into an upper range and lower range (don't overlap)
    // lower range = floor..midpoint
    // upper range = midpoint+1..ceiling
    const midpoint = Math.floor(floor + (ceiling - floor) / 2);
    const lowerFloor = floor;
    const lowerCeiling = midpoint;
    const upperFloor = midpoint + 1;
    const upperCeiling = ceiling;

    const distinctPossibleNumsInLowerRange = lowerCeiling - lowerFloor + 1;

    // Count num of items in lower range
    let itemsInLowerRange = 0;
    numbers.forEach(item => {
      // Is it in the lower range?
      if (item >= lowerFloor && item <= lowerCeiling) {
        itemsInLowerRange += 1;
      }
    });

    if (itemsInLowerRange > distinctPossibleNumsInLowerRange) {

      // There must be a duplicate in the lower range
      // so use the same approach iteratively on that range
      floor = lowerFloor;
      ceiling = lowerCeiling;
    } else {

      // There must be a duplicate in the upper range
      // so use the same approach iteratively on that range
      floor = upperFloor;
      ceiling = upperCeiling;
    }
  }

  // Floor and ceiling have converged
  // We found a number that repeats!
  return floor;
}
