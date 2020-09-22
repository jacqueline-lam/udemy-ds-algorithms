// First Version
function pivot(arr, start = 0, end = arr.length + 1) {
  function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  var pivot = arr[start];
  var swapIdx = start;

  for (var i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++; // +1 ele that is less than pivot
      swap(arr, swapIdx, i); // swap arr[i] with arr[swapIdx]
    }
  }
  // Swap starting ele (pivot) with the pivot index
  swap(arr, start, swapIdx);
  return swapIdx;
}

// Version with ES2015 Syntax
function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}

pivot([4, 8, 2, 1, 5, 7, 6, 3]) // pivot = 4
// move things over to left, swap them every time < 4
// left 4 at the 1st position until very end to swap 4 to correct spot
// pivot to return 3 at the end
// [4,8<->2 = 2, 8, 1, 5, 7 , 6, 3]
// [4, 2, 8<->1 = 1, 1-> 8, 5, 7 , 6, 3]
// swapIdx = 2 + 1:
// [4, 2, 1, 8-> 3, 5, 7, 6, 3->8]
// swap ele at swapIdx with arr[start]
// [4->3,2,1,3->4,5,7,6,8] // swapIdx = 3


