/*
Given an array of intervals where intervals[i] = [starti, endi],
merge all OVERLAPPING intervals,
and return an array of the non-overlapping intervals that cover all the intervals in the input.


Example 1:
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.


Constraints:
1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104
*/

// O(NlogN) because of sort
// Runtime: 165 ms, faster than 49.83% of JavaScript
// Memory Usage: 48.6 MB, less than 57.94% of JavaScript

function merge(intervals) {
  if (!intervals.length) return intervals;
  // Sort intervals in ascending order
  // intervals.sort((a, b) => a.start !== b.start ? a.start - b.start : a.end - b.end)
  intervals.sort((a, b) => a[0] - b[0]);
  let prev = intervals[0];
  let result = [prev];

  for (let i = 1; i < intervals.length; i++) {
    let curr = intervals[i];
    // Merge all OVERLAPPING intervals - e.g. [1,3],[2,6] -> 2 < 3 -> [1,6]
    if (curr[0] <= prev[1]) {
      // call by reference followed by JS arr & obj
      prev[1] = Math.max(prev[1], curr[1]);
    } else {
      result.push(curr);
      prev = curr;
      // console.log(result)
      // console.log('curr=', curr)
      // console.log('reuslt', result)
      // console.log('prev is now curr=', curr)
    }
  }
  return result;
}


merge([[1, 3], [2, 6], [8, 16], [15, 18]]) // [[1,6],[8,10],[15,18]]
// initial result = [ [ 1, 3 ] ]
// prev= [ 1, 6 ]
// curr= [ 8, 10 ]
// reuslt [ [ 1, 6 ], [ 8, 10 ] ]
// prev is now curr= [ 8, 10 ]
// curr= [ 15, 18 ]
// reuslt [ [ 1, 6 ], [ 8, 10 ], [ 15, 18 ] ]
// prev is now curr= [ 15, 18 ]
// final result = [ [ 1, 6 ], [ 8, 10 ], [ 15, 18 ] ]

merge([[1, 3], [2, 6], [8, 16], [15, 18]])
// initial result = [ [ 1, 3 ] ]
// prev= [ 1, 6 ]
// [ [ 1, 6 ] ]
// curr= [ 8, 16 ]
// reuslt [ [ 1, 6 ], [ 8, 16 ] ]
// prev is now curr= [ 8, 16 ]
// prev= [ 8, 18 ]
// final result = [ [ 1, 6 ], [ 8, 18 ] ]


merge([[1, 4], [4, 5]])
// initial result = [ [ 1, 4 ] ]
// prev= [ 1, 5 ]
// final result = [ [ 1, 5 ] ]
