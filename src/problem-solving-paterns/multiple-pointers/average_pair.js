// given a sorted array of integers and a targer avg
// determine if there's a pair of values where avg of pair = target avg
// there may be > 1 pair that matches targetAvg
function averagePair(arr, targetAvg) {
  // not needed since while loop will not be run:
  // if (arr.length < 2) return false; // edge case
  let left = 0;
  let right = arr.length - 1;

  while (left < right) { // 0 < 2 => 1 < 2
    let currentAvg = (arr[left] + arr[right]) / 2 // (1 + 3)/ 2 = 2
    if (currentAvg === targetAvg) {
      return true;
    } else if (targetAvg > currentAvg) { // 2.5 > 2
      left++; // 0 => 1
    } else {
      right--;
    }
  }
  return false;
}

averagePair([1, 2, 3], 2.5) //true
// [1, 2, 3] => (3+1)/2 = 2 < targetAvg 2.5
// [x,2,3] => (2+3)/2 = 2.5 === targetAvg 2.5 => TRUE
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) //true
averagePair([-1, 0, 3, 4, 5, 6], 4.1) //false
averagePair([], 4) //false