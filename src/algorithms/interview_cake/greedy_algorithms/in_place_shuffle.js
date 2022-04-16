/*
-GREEDY ALGORITHMS-

Write a function for doing an in-place shuffle of an array.

The shuffle must be "uniform," meaning each item in the original array
must have the same probability of ending up in each spot in the final array.

Assume that you have a function `getRandom(floor, ceiling)`
for getting a random integer that is >= floor and <= ceiling.

-Breakdown-
We can simply choose a random item to be the first item in the resulting array,
 then choose another random item (from the items remaining)
 to be the second item in the resulting array, etc.

 If we didn't have the "in-place" requirement, we could allocate a new array,
 then one-by-one take a random item from the input array, remove it,
 put it in the first position in the new array,
 and keep going until the input array is empty
 (well, probably a copy of the input array—best not to destroy the input)

***
*/

// // This does not give a uniform random distribution
// function naiveShuffle(array) {
//   // For each index in the array
//   for (let firstIndex = 0; firstIndex < array.length; firstIndex++) {

//     // Grab a random other index
//     const secondIndex = getRandom(0, array.length - 1);

//     // And swap the values
//     if (secondIndex !== firstIndex) {
//       const temp = array[firstIndex];
//       array[firstIndex] = array[secondIndex];
//       array[secondIndex] = temp;
//     }
//   }
// }

// Getting a random int between two values:
// Math.random() function returns a floating-point,
// pseudo-random number in the range 0 to less than 1
function getRandom(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

// * We choose a random item to move to the first index,
// then we choose a random other item to move to the second index, etc.*

// We "place" an item in an index by swapping it with
// the item currently at that index.

// Crucially, once an item is placed at an index it CAN'T be moved.
// So for the first index, we choose from n items,
// for the second index we choose from n−1 items, etc.

// O(N) time O(1) Space
function shuffleInPlace(array) {
  // If it's 1 or 0 items, just return
  if (array.length <= 1) return;

  // Walk through from beginning to end
  for (let idxWeAreChoosingFor = 0;
    idxWeAreChoosingFor < array.length - 1; idxWeAreChoosingFor++) {

    // Choose a random not-yet-placed item to place there
    // (could also be the item currently in that spot)
    // must be an item AFTER the current item, because the stuff
    // before has all already been placed
    const random = getRandom(idxWeAreChoosingFor, array.length - 1);

    // Place our random choice in the spot by swapping
    if (random !== idxWeAreChoosingFor) {
      const valueAtIdxWeChoseFor = array[idxWeAreChoosingFor];
      array[idxWeAreChoosingFor] = array[random];
      array[random] = valueAtIdxWeChoseFor;
    }
  }
}
// algorithm known as the Fisher-Yates shuffle (Knuth shuffle).

