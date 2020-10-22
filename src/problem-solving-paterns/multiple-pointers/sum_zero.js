// MULTIPLE POINTERS PATTERN

// Naive Solution for sumZero()
// Time Complexity = O(N^2) and Space Complexity = O(1)
function sumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

// Refactored Solution for sumZero()
// Time Complexity = O(N) and Space Complexity = O(1)
function sumZero(arr) {
    let left = 0;
    let right = arr.lenght - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

sumZero([-4, -3, -2, -1, 0, 1, 2, 5]) // [-2,2]
sumZero([-4, -3, -2, -1, 0, 5, 10]) // undefined - stopped because while loops runs while L < R