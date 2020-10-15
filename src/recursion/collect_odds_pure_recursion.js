// PURE RECURSION

function collectOddValues(arr) {
    let newArr = [];

    if (arr.length === 0) {
        return newArr;
    }

    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

collectOddValues([1, 2, 3, 4, 5])
// [1].cocncat(collectOddValues[2,3,4,5])
//              [].cocncat(collectOddValues[3,4,5])
//                  [3].cocncat(collectOddValues[4,5])
//                       [].cocncat(collectOddValues[5])
//                              [5]
//                       [].cocncat([5])
//                  [3].cocncat([5])
//              [].cocncat([3,5])
// [1].cocncat([3,5])
// newArr = [1,3,5]