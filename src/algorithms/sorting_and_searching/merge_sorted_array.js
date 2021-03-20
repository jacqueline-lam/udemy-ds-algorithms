// Merge Sorted Array

// Given two sorted integer arrays nums1 and nums2,
// merge nums2 into nums1 as one sorted array.
// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has a size equal to m + n such that it has enough space to hold additional elements from nums2.


// Example 1:
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]

// Example 2:
// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]

// Constraints:
// nums1.length == m + n
// nums2.length == n
// 0 <= m, n <= 200
// 1 <= m + n <= 200
// -109 <= nums1[i], nums2[i] <= 109


// SOLUTION
// /**
//  * @param {number[]} nums1
//  * @param {number} m
//  * @param {number[]} nums2
//  * @param {number} n
//  * @return {void} Do not return anything, modify nums1 in-place instead.
//  */

// Hints
// You can easily solve this problem if you simply think about two elements at a time
// rather than two arrays. We know that each of the individual arrays is sorted.
// What we don't know is how they will intertwine.
// Can we take a local decision and arrive at an optimal solution?

// If you simply consider one element each at a time from the two arrays
// and make a decision and proceed accordingly, you will arrive at the optimal solution.

let merge = function (nums1, m, nums2, n) {
  let len = m + n;
  m--;
  n--;
  while (len--) {
    if (n < 0 || nums1[m] > nums2[n]) {
      nums1[len] = nums1[m--];
    } else {
      nums1[len] = nums2[n--];
    }
  }
};