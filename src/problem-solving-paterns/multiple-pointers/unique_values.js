// accepts sorted array & counts # of unique values in the array
// there can be -ve numbers, but it'll always be sorted

// O(N) time because we are looping once
function countUniqueValues(arr) {
    if (arr.length === 0) return 0;
    var i = 0;
    for (var j = 1; j < arr.length; j++) {
        // update i when two values do not match
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
countUniqueValues([1, 2, 2, 5, 7, 7, 99])
// i
// [1, 2, 2, 5, 7, 7, 99]
//     j

//     i
// [1, 2, 2, 5, 7, 7, 99]
//        j

//     i
// [1, 2, 2, 5, 7, 7, 99]
//           j

//        i
// [1, 2, 2->5, 5, 7, 7, 99]
//           j

//        i->i
// [1, 2, 5, 5, 7, 7, 99]
//               j

//           i
// [1, 2, 5, 5->7, 7, 7, 99]
//               j

//           i->i
// [1, 2, 5, 7, 7, 7, 99]
//                     j

//              i
// [1, 2, 5, 7, 7-> 99, 7, 99]
//                         j // *j reaches lenght of array *
// return i + 1 = 4 + 1 = 5