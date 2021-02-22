// Maximum Depth of Binary Tree

// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the
// longest path from the root node down to the farthest leaf node.

// Example 1:
//    3
// 9    20
//    15   7
// Input: root = [3,9,20,null,null,15,7]
// Output: 3

// Example 2:
// Input: root = [1,null,2]
// Output: 2

// Example 3:
// Input: root = []
// Output: 0

// Example 4:
// Input: root = [0]
// Output: 1

// Constraints:
// The number of nodes in the tree is in the range [0, 104].
// -100 <= Node.val <= 100


// SOLUTION
// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number}
//  */

let maxDepth = function (root) {
  if (!root) return 0; //root === null
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};


// Math.max(maxDepth(9), maxDepth(20)) +1
//     max( max(0,0)+1=1    max(maxDepth(15), maxDepth(17))+1) +1
//                       (15.left,15.right) +1, (17.left,17.right) +1
//      max(      1             max(1,1)+1            ) + 1
//      1+2= 3

