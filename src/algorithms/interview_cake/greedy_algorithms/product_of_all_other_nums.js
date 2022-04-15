/*
GREEDY ALGORITHMS
PRODUCT OF ALL OTHER NUMBERS

You have an array of integers, and for each index you want to
find the product of every integer except the integer at that index.

Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers
and returns an array of the products.

For example, given:
  [1, 7, 3, 4]

your function would return:
  [84, 12, 28, 21]

by calculating:
  [7 * 3 * 4,  1 * 3 * 4,  1 * 7 * 4,  1 * 7 * 3]

Here's the catch: You can't use division in your solution!

NOTES:
Does your function work if the input array contains zeroes? Remember—no division.

We can do this in O(n)time and O(n) space!

We only need to allocate one new array of size n.

BREAKDOWN:
e.g. [3, 1, 2, 5, 6, 4]
[_1*2*5*6*4, 3*_*2*5*6*4, 3*1*_*5*6*4, 3*1*2*_*6*4, 3*1*2*5*_*4, 3*1*2*5*6*_ ]

1. Product of all ints BEFORE each idx:
*give idx 0 a value of 1 since it has no ints before it
[1, 3, 3*1, 3*1*2, 3*1*2*5, 3*1*2*5*6]
= [1, 3, 3, 6, 30,180]
2. Product of all ints AFTER each idx:
[4*6*5*2*1,4*6*5*2, 4*6*5, 4*6, 4, 1]
= [240, 240, 120, 24, 4, 1]

THOUGHTS:
- We'll go thru array greedily twice
1. get products of all ints BEFORE each idx, and then
2. go BACKWARDS to get the products of all ints AFTER each idx
3. Multiply all products BEFORE and AFTER each idx to get answer
Edge cases: if less than 2 ints, no products to return because there's no "other" ints
*/

// Initial part 1 and 2:
// BEFORE:
// const productsOfAllIntsBeforeIdx = new Array(intArray.length);

// let productSoFar = 1;
// for (let i = 0; i < intArray.length; i++) {
//   productsOfAllIntsBeforeIdx[i] = productSoFar;
//   productSoFar *= intArray[i];
// }

// AFTER:
// const productsOfAllIntsAfterIdx = new Array(intArray.length);

// let productSoFar = 1;
// for (let i = intArray.length - 1; i <= 0; i--) {
//   productsOfAllIntsAfterIdx[i] = productSoFar;
//   productSoFar *= intArray[i];
// }

// Combine the two to save one add'l O(N) memory cost


// O(N) time and O(N) space
// - Two passes thru our input an array, and then arr we build always has same length as input array
function getProductsOfAllIntsExceptAtIndex(intArray) {
  if (intArray.length < 2) {
    throw new Error('Getting product of nums at other indices require at least 2 nums.')
  }

  const productsOfAllIntsExceptAtIdx = new Array(intArray.length);

  // For each int, find product of all ints BEFORE it,
  // storing total product so far each time
  let productSoFar = 1;
  for (let i = 0; i < intArray.length; i++) {
    productsOfAllIntsExceptAtIdx[i] = productSoFar;
    productSoFar *= intArray[i];
  }

  // For each int, we find product of all ints AFTER it.
  // since each idx in products already has product of all ints before it,
  // now we're storing the total product of all other ints
  productSoFar = 1;
  for (let j = intArray.length - 1; j >= 0; j--) {
    productsOfAllIntsExceptAtIdx[i] *= productSoFar;
    productSoFar = intArray[j];
  }

  return productsOfAllIntsExceptAtIdx;
}