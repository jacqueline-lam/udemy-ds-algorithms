// Optimized BubbleSort with noSwaps
function bubbleSort(arr) {
  var noSwaps;
  for (var i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
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

// only takes 1 pass to sort array
// => [8, 1, 2, 3, 4, 5, 6, 7] 8 1
// => [1, 8, 2, 3, 4, 5, 6, 7] 8 2
// => [1, 2, 8, 3, 4, 5, 6, 7] 8 3
// => [1, 2, 3, 8, 4, 5, 6, 7] 8 4
// => [1, 2, 3, 4, 8, 5, 6, 7] 8 5
// => [1, 2, 3, 4, 5, 8, 6, 7] 8 6
// => [1, 2, 3, 4, 5, 6, 8, 7] 8 7
// => [1, 2, 3, 4, 5, 6, 7, 8] 1 2
// => [1, 2, 3, 4, 5, 6, 7, 8] 2 3
// => [1, 2, 3, 4, 5, 6, 7, 8] 3 4
// => [1, 2, 3, 4, 5, 6, 7, 8] 4 5
// => [1, 2, 3, 4, 5, 6, 7, 8] 5 6
// => [1, 2, 3, 4, 5, 6, 7, 8] 6 7
// => [1, 2, 3, 4, 5, 6, 7, 8]