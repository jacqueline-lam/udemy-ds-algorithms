// Original Solution
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);

    // while middle is wrong - num is either greater or less than
    // make sure start <= end ()
    while (arr[middle] !== elem && start <= end) {
        if (elem < arr[middle]) {
            end = middle - 1; // we already tested middle
        } else {
            // move start of window to num following middle
            start = middle + 1;
        }
        // reassign middle
        middle = Math.floor((start + end) / 2);
    }
    // return idx of ele found of -1 if not found
    if (arr[middle] === elem) {
        return middle;
    }
    return -1;
}

// REFACTORRED Version
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);

    while (arr[middle] !== elem && start <= end) {
        if (elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 103)
// [2, 5, 6, 9, 13, 15, 28, 30], 50
// S         M               E
//              S   M        E
//                       SM  E
//                           SME
//                           ME    S
//E SM
// ^if num > middle, start will be set to middle + 1, eventually be > end; middle stays same
// ^problem as soon as S becomes > E OR E becomes < S

// My attempt
function binarySearch(array, num) {
    let midpoint = Math.floor(array.length / 2);
    let start = 0;
    let end = array.length - 1;
    let subArray = [];

    // make sure that num is in range of sorted array
    // WRONG: Inifinite loop
    while (num >= array[start] && num <= array[end]) {
        if (num === array[midpoint]) {
            return midpoint;
        } else if (num < array[midpoint]) {
            subArray = array.slice(start, midpoint);
            binarySearch(subArray, num);
        } else if (num > array[midpoint]) {
            subArray = array.slice(midpoint + 1);
            binarySearch(subArray, num);
        }
    }
    return -1;
}