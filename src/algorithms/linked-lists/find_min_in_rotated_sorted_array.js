/*
153. Find Minimum in Rotated Sorted Array

Suppose an array of length n sorted in ascending order is rotated between 1 and n times.
For example, the array `nums = [0,1,2,4,5,6,7]` might become:
- [4,5,6,7,0,1,2] if it was rotated 4 times.
- [0,1,2,4,5,6,7] if it was rotated 7 times.

Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time
results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of UNIQUE elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.

Example 1:
Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.

Example 2:
Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.

Example 3:
Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times.

Constraints:
n == nums.length
1 <= n <= 5000
-5000 <= nums[i] <= 5000
All the integers of nums are unique.
nums is sorted and rotated between 1 and n times.

Hint #1
Array was originally in ascending order. Now that the array is rotated,
there would be a point in the array where there is a small deflection from the increasing sequence.
eg. The array would be something like [4, 5, 6, 7, 0, 1, 2].

Hint #2
You can divide the search space into two and see which direction to go.
Can you think of an algorithm which has O(logN) search complexity? - BINARY SEARCH

Hint #3
All the elements to the left of inflection point > first element of the array.
All the elements to the right of inflection point < first element of the array.
*/

// THOUGHTS:
// Must use BINARY SEARCH O(logN) runtime
// rather than eliminating 1 ele at a time, eliminate HALF of remaining eles at a time
// BUT only works on sorted arrays
// HOW TO FIND OUT HOW MANY TIMES ARR ROTATED WITHOUT USING .SORT() - O(NlogN)

/*
l      m       r
[0,1,2,3,4,5,6,7]
[7,0,1,2,3,4,5,6]
[6,7,0,1,2,3,4,5]
[5,6,7,0,1,2,3,4]
[4,5,6,7,0,1,2,3]
[3,4,5,6,7,0,1,2]
[2,3,4,5,6,7,0,1]
[1,2,3,4,5,6,7,0]
*/

// 1. L and R are 2 pointers that keep track of the start and end of the subarray we're currently searching.

// 2. Within the loop, a mid pointer is calculated to be half the sum of left and right.
// We then start to compare the value at the mid pointer and the value at the right pointer.
// From here, there can only be 2 case:

// (a) nums[mid] > nums[right]
// For an un-rotated sorted array, there can NEVER be a case where (nums[mid] would EVER > nums[right]).
// However, this condition can happen in a rotated array if the mid pointer is residing on the left side of the rotated array.
// Once we know that the mid pointer is at the left side of the array, we can start to cut down our search to ONLY the RIGHT SIDE
// since we know that the minimum value can never be in the left side.
// Hence, we update the left pointer to be mid + 1,
// indicating that we are NOW SEARCHING RIGHT SIDE.

// (b) if (nums[mid] <= nums[right])
// subarray that we're currently searching is now a properly sorted array - un-rotated.
// To get the min of this subarray, keep adjusting right pointer to the left by setting
// the MID POINTER AS THE RIGHT POITNER, cutting down our serach to only the left half of this subarray.
//  Eventually, we will reach the left most element of this subarray.

// SOLUTION
// Time: O(logn), at every stage of binary search, we're splitting the array into half
let findMin = function (nums) {
  // Pointers that keep track of the start and end of the subarray that we're currently searching
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return nums[left];
}

//findMin([7,0,1,2,3,4,5,6])
// mid = i2 = 1
// mid(1) > nums[right](6) ? -> False -> right = i2 -> [7,0,1]
// mid= i1= (0) > nums[right](1) ? -> False -> right = i1 -> [7,0]
// mid= Math.floor((0+1)/2) = i0=7 -> nums[mid](7) > nums[right]=(0)? -> True -> left = mid=0 +1 = 1
// both left and right = i1
// return nums[left] => nums[1] => 0