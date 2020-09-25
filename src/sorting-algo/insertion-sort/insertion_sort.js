// gradually creating larger left half

// 1. start by picking 2nd ele
// 2. Compare 2nd ele w/ one before & swap if needed
// 3. Continue to next ele &
// if it's in incorrect order,
// iterate thru sorted portion (Left side) to place ele in correc place


function insertionSort(arr) {
    var currentVal;
    for (var i = 1; i < arr.length; i++) {
        currentVal = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j]
            // console.log(`arr[${j + 1}] = arr[${j}]; ${arr[j + 1]} = ${arr[j]}`)
        }
        arr[j + 1] = currentVal;
        // console.log(`idx${j}+1 = currentVal ${currentVal}`)
        // console.log(arr)
    }
    return arr;
}

insertionSort([2, 1, 9, 76, 4])