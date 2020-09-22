function insertionSort(arr) {
    var currentVal;
    for (var i = 1; i < arr.length; i++) {
        currentVal = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j]
            console.log(`arr[${j + 1}] = arr[${j}]; ${arr[j + 1]} = ${arr[j]}`)
        }
        arr[j + 1] = currentVal;
        console.log(`idx${j}+1 = currentVal ${currentVal}`)
        console.log(arr)
    }
    return arr;
}

insertionSort([2, 1, 9, 76, 4])