/*
 11. Container With Most Water - MEDIUM
You are given an integer array height of length n.
There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.
Return the maximum amount of water a container can store.
Notice that you may not slant the container.

Example 1:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Example 2:
Input: height = [1,1]
Output: 1

Constraints:
n == height.length
2 <= n <= 105
0 <= height[i] <= 104

Hint #1
The aim is to maximize the area formed between the vertical lines.
The area of any container is calculated using the shorter line as length and the distance between the lines as the width of the rectangle.
**Area = length of shorter vertical line * distance between lines**
We can definitely get the maximum width container as the outermost lines have the maximum distance between them.
However, this container might not be the maximum in size as one of the vertical lines of this container could be really short.

Hint #2
Start with the maximum width container and go to a shorter width container
if there is a vertical line longer than the current containers shorter line.
This way we are compromising on the width but we are looking forward to a longer length container.
*/

// area of the container is limited by the smallest side, so we need to know what the smallest side is every iterations
// area = (right - left) multiplied by the smallestSide.
// If the area is greater than our result, we have a new result
// When moving the left or right pointer, we want to get rid of the smaller side, so iterate from that side

// O(n) Time and O(1) Constant Space (by having a left and right pointer, and moving these pointers inward)
// Runtime: 80 ms, faster than 86.95% of JavaScript
// Memory Usage: 49.4 MB, less than 61.07% of JavaScript

let maxArea = function (height) {
  let result = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    // We can check the left and right alternatively
    // area = (right - left) * min(height[left], height[right])
    let shorterSide = Math.min(height[left], height[right])
    let area = (right - left) * shorterSide

    // If left bar > right bar, we don't need to move left bar until right bar > left bar, vise versa
    // When left bar pass right bar, we've already check all the boundaries.
    if (area > result) result = area;
    (height[left] < height[right]) ? left++ : right--;
  }
  return result;
}