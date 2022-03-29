/*
104. Maximum Depth of Binary Tree (Easy)

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path
 from the root node down to the farthest leaf node.

Example 1:
   3
9    30
   15   7
Input: root = [3,9,20,null,null,15,7]
Output: 3

Example 2:
Input: root = [1,null,2]
Output: 2

Constraints:
The number of nodes in the tree is in the range [0, 104].
-100 <= Node.val <= 100

Topics: Tree, Depth-First Search, Breadth-First Search, Binary Tree
*/

/*
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }

 * @param {TreeNode} root
 * @return {number}
 */

// WRONG
// let maxDepth = function (root) {
//   if (root == null) return 0;
//   let depthCount = 1;
//   let queue = [root];

//   while (queue.length) {
//     const node = queue.shift();
//     console.log('node', node.val, 'l=', node.left, 'r=', node.r)
//     console.log('!!node.left=', !!node.left)
//     console.log('!!node.right=', !!node.right)

//     if (!!node.left || !!node.right) depthCount++;
//     console.log('current count:', depthCount)
//     if (node.left) queue.push(node.left);
//     if (node.right) queue.push(node.right);
//   }
//   return depthCount;
// };

// [1,2,3,4,null,null,5]
//      1
//    2    3
//  4        5

// node 1 l= [2,4] r= undefined
// !!node.left= true
// !!node.right= true
// current count: 2
// node 2 l= [4] r= undefined
// !!node.left= true
// !!node.right= false
// current count: 3
// node 3 l= null r= undefined
// !!node.left= false
// !!node.right= true
// current count: 4
// node 4 l= null r= undefined
// !!node.left= false
// !!node.right= false
// current count: 4
// node 5 l= null r= undefined
// !!node.left= false
// !!node.right= false
// current count: 4

// *undefined !== null — use boolean isntead
// if (!!node.left || !!node.right) depthCount++;

// Edited answer #1 - NON-RECURSIVE
// Runtime: O(N+K)  — 69 ms, faster than 86.50% of JavaScript
// Memory Usage: 44.8 MB, less than 88.07% of JavaScript
let maxDepth = function (root) {
  if (!root) return 0;
  const queue = [root];
  let depth = 0;

  while (queue.length !== 0) {
    // INCREMENT ONLY AT NEW LOOP - NEW SET OF L&R
    depth++;
    const len = queue.length;
    // KEY IS USING LOOP
    for (let i = 0; i < len; i++) {
      if (queue[i].left) queue.push(queue[i].left);
      if (queue[i].right) queue.push(queue[i].right);
    }
    queue.splice(0, len); // REMOVE EVALUATED NODE - root, L&R, next L&R...
  }

  return depth;
};

// ANSWER #2 — RECURSIVE ANSWER
// Runtime: O(N) —  97 ms, faster than 46.11% of JavaScript
// Memory Usage: O(logN) — 45.2 MB, less than 54.20% of JavaScript

// if root = 0, don't count
let maxDepth = function (root) {
  if (root === null || root === undefined) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

// [1,2,3,4,null,null5]
//           1 + max(l2,r3)                     = 1+2=3 => RESULT 3
//    1+max(l4,null)   1+ max(null,r5)          = 1+1=2
//1+ max(null,null)          1+ max(null,null)  =1+0=1

// [2,7,4,null,null,8,null]
//    2           1 + max(l,r) <- 1+max(1,2) = 3
// 7     4       1+max(null,null)=1, 1+ max(l,null)=2
//          8                       1+ max(null,null) =1

