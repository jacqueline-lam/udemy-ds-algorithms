// Merges two already sorted arrays
function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;
    // while there is still data for us to look at in both arrays
    // falsey if we hit the end of one of the arrays
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    // hit end of one of the arrays
    // add remaining items in arr #1 into results
    while (i < arr1.length) {
        results.push(arr1[i])
        i++;
    }

    // or add remaining items in arr #2 into results
    while (j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}
merge([100, 200], [1, 2, 3, 5, 6])

