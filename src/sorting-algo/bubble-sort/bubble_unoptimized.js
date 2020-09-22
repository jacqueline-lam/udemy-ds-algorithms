// UNOPTIMIZED VERSION OF BUBBLE SORT
function bubbleSort(arr) {
  for (var i = arr.length; i > 0; i--) {
    for (var j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// ES2015 Version
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);

// problem - unoptimized
// e.g. bubbleSort([8, 1, 2, 3, 4, 5, 6, 7])
// => only takes 1 pass to sort array, doesn't take 8 iterations
// but we keep going w/o making any swaps