/*
INTERVIEW CAKE - GREEDY ALGORITHMS - HIGHEST PRODUCT OF 3

Given an array of integers,
find the highest product you can get from three of the integers.

The input arrayOfInts will always have at least three integers.

e.g.
[1,8,2,3,6,9]
initial maxProduct = 1*8*2= 16
- need to have max1, max2, max3

what if [10 ,  8,    4,  ,2, -2, -4, -10]? = -10*-4*10 = 400 > 10*8*4 = 320
        max1, max2, max3,       min1, min2
-- thus needs min1, min2, max1, max2, max3 (add'l value)
 */

// FIRST: O(NlogN) solution - 116ms runtime, 47mb memory
function highestProductOfThree(arrayOfInts) {
  // expect 3+ ints from arrayOfInts
  // sort in place by descending order - O(NlogN)
  arrayOfInts.sort((a, b) => b - a);

  // base case
  let postiveEnd = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];
  let negativeEnd = arrayOfInts[arrayOfInts.length - 1] * arrayOfInts[arrayOfInts.length - 2] * arrayOfInts[0];
  return Math.max(postiveEnd, negativeEnd);
}

// SECOND: O(N) SOLUTION
// BEST ANSWER SO FAR: max product based on nums seen so far
// ADDITIONAL VALUES: max1, max2 and max3, min1, min2, min3
// O(N) time O(1) Space
// 80ms runtime 45.5mb memory
function highestProductOfThree(arrayOfInts) { //unsorted nums
  // expect 3+ ints from arrayOfInts
  let max1 = -Infinity;
  let max2 = -Infinity;
  let max3 = -Infinity;
  let min2 = Infinity;
  let min1 = Infinity;

  for (let i = 0; i < arrayOfInts.length; i++) {
    // handle biggest +ve nums
    if (arrayOfInts[i] > max1) {
      [max1, max2, max3] = [arrayOfInts[i], max1, max2];
    } else if (arrayOfInts[i] > max2) {
      [max2, max3] = [arrayOfInts[i], max2]; //max1 remains same
    } else if (arrayOfInts[i] > max3) {
      max3 = arrayOfInts[i];
    }

    // handle -ve nums by comparing curr num with min1 and min2
    if (arrayOfInts[i] < min1) {
      [min2, min1] = [min1, arrayOfInts[i]];
    } else if (arrayOfInts[i] < min2) {
      min2 = arrayOfInts[i];
    }
  }
  // max product - either 2 biggest -ve nums * biggest +ve num or 3 biggest +ve nums
  return Math.max(max1 * max2 * max3, max1 * min1 * min2);
}