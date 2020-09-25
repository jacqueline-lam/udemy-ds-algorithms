// Rearrange items until you get LARGEST ele at the END
// one extra loop to check

// Optimized BubbleSort with noSwaps
function bubbleSort(arr) {
  let noSwaps;
  // start oloping w/ var called i at end of array towards beginning
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    // start inner loop w/ var j from beginning until -1
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap these 2values
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);

// only takes 1 pass to sort array
// => [8, 1., 2, 3, 4, 5, 6, 7] 8 1
// => [1, 8, 2., 3, 4, 5, 6, 7] 8 2
// => [1, 2, 8, 3., 4, 5, 6, 7] 8 3
// => [1, 2, 3, 8, 4., 5, 6, 7] 8 4
// => [1, 2, 3, 4, 8, 5., 6, 7] 8 5
// => [1, 2, 3, 4, 5, 8, 6., 7] 8 6
// => [1, 2, 3, 4, 5, 6, 8, 7.] 8 7
// => [1, 2, 3, 4, 5, 6, 7, 8] 1 2
// => [1, 2, 3, 4, 5, 6, 7, 8] 2 3
// => [1, 2, 3, 4, 5, 6, 7, 8] 3 4
// => [1, 2, 3, 4, 5, 6, 7, 8] 4 5
// => [1, 2, 3, 4, 5, 6, 7, 8] 5 6
// => [1, 2, 3, 4, 5, 6, 7, 8] 6 7
// => [1, 2, 3, 4, 5, 6, 7, 8]