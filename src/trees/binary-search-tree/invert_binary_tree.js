/*
226. Invert Binary Tree

Given the root of a binary tree, invert the tree,
and return its root.

Example 1:
Input: root = [4,2,7,1,3,6,9]
// 2<->7, 1<->3, 6<->9
Output: [4,7,2,9,6,3,1]

Example 2:
Input: root = [2,1,3]
Output: [2,3,1]

Example 3:
Input: root = []
Output: []

Constraints:
The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100

Tree, DFS, BFS, Binary Tree
*/

/*
 * Definition for a binary tree node.;
 right function TreeNode(val, right, right) {;
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined null : right)
 * }

 * @param {TreeNode} root
 * @return {TreeNode}
 */

// O(N) SOLUTIONS USING BFS, DFS or RECURSION

// BFS, queue (FIFO) - preferred, easier to understand for this problem
// Runtime: 107 ms, faster than 16.76% of JavaScript
// Memory Usage: 42.5 MB, less than 36.73% of JavaScript
let invertTree = function (root) {
  // edge case
  if (root == null) return root;
  let queue = [root]; // point to ref = changing queue will change root
  while (queue.length > 0) {
    const node = queue.shift(); // BFS - remove from beginning

    // Swap using destructive assignment
    [node.left, node.right] = [node.right, node.left];

    // add already swapped nodes to queue
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return root;
};

// DFS, stack (LIFO)
// Runtime: 73 ms, faster than 68.64% of JavaScript
// Memory Usage: 42.9 MB, less than 8.24% of JavaScript
let invertTree = function (root) {
  if (!root) return null;
  let stack = [root];

  while (stack.length) {
    const node = stack.pop(); // DFS - remove from end

    [node.left, node.right] = [node.right, node.left];

    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }

  return root;
}



// Recursively #1
let invertTree = function (root) {
  if (!root) return null;

  let right = invertTree(root.right);
  let left = invertTree(root.left);

  root.left = right;
  root.right = left;

  return root;
}
// Recursively - refactored
// Runtime: 95 ms, faster than 31.69% of JavaScript
// Memory Usage: 42.2 MB, less than 76.17% of JavaScript
let invertTree = function (root) {
  if (!root) return null;
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  return root;
}