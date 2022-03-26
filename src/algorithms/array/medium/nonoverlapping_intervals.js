/*
435. Non-overlapping Intervals (Medium)

Given an array of intervals `intervals` where `intervals[i] = [starti, endi]`,
return the minimum number of intervals you need to remove
to make the rest of the intervals non-overlapping.

Example 1:
Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
Output: 1
Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.

Example 2:
Input: intervals = [[1,2],[1,2],[1,2]]
Output: 2
Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.

Example 3:
Input: intervals = [[1,2],[2,3]]
Output: 0
Explanation: You don't need to remove any of the intervals since they're already non-overlapping.

Constraints:
1 <= intervals.length <= 105
intervals[i].length == 2
-5 * 104 <= starti < endi <= 5 * 104

Topics:
- array,
- dynamic programming,
- greedy (build up solution by choosing option that looks the best at every step),
- sorting

 * @param {number[][]} intervals
 * @return {number}
*/

// GREEDY APPROACH
// Time Complexity: O(N LogN)
// Runtime: 395 ms, faster than 31.36% of JavaScript
// Space Complexity: O(1)
// Memory Usage: 74.4 MB, less than 77.90% of JavaScript
let eraseOverlapIntervals = function (intervals) {
  // sort by 2nd ele in each interval
  intervals.sort((a, b) => a[1] - b[1]);

  let minRemove = 0;
  let prev = intervals[0]

  for (let i = 1; i < intervals.length; i++) {
    let curr = intervals[i];
    if (curr[0] < prev[1]) minRemove++;
    // key is to only change prev if curr[0]<prev[1]
    else prev = curr;
  }

  return minRemove;
}
// [[1,2],[2,3],[3,4],[1,3]]
// sort -> [[1,2],[2,3],[1,3],[3,4]]
// see if curr[0] < prev[1] (2 not <2)
// continue to see if next[0] >= prev[1] => then minRemove++
// [2,3][1,3] -> 1 < 3 remove++, prev is still [2,3]
// [2,3][3,4] -> prev = [3,4]
// return minRemove = 1;

// ============================================================================
// 2-POINTER / SLIDING WINDOW APPRAOCH — O(NlogN)
// The idea is to sort the intervals by their start times
// and then traverse the array from behind.

// If the end time at interval[i-1] is greater than
// the start time at interval[i] we have found overlap.
// So we move to check interval[i] with interval[i-2] endtime
//  and so on till we get to an interval j
// where the there is no overlap. Then we let i = j.

// Reasoning
// We traverse from the right of the list becuase
// whenever we meet an interval at j which doesn't overlap with our current interval i,
//  there can be no more overlaping intervals beyond j
// and the overlaps between i and j is minimum.

var eraseOverlapIntervalsB = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let length = intervals.length;
  let remove = 0;
  let i = length - 1;

  while (i > 0) {
    let j = i - 1
    while (j >= 0 && intervals[j][1] > intervals[i][0]) {
      remove++;
      j--;
    }
    i = j;
  }
  return remove;
};
// [[1,2],[2,3],[3,4],[1,3]]
// [[1,2],[1,3],[2,3],[3,4]] // after sort
//                 j   i
//            i    ij     -> 3 > 2, remove =1

