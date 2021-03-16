// Symmetric Tree
// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// Example 1:
// Input: root = [1,2,2,3,4,4,3]
// Output: true
// Example 2:
// Input: root = [1,2,2,null,3,null,3]
// Output: false

// Constraints:
// The number of nodes in the tree is in the range [1, 1000].
// -100 <= Node.val <= 100
// Follow up: Could you solve it both recursively and iteratively?

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
//  * @return {boolean}
//  */

// Depth-First Search (DFS)
// create a var to stroe values of nodes visited
// store root of BST in var called current
// write helper fn which accepts a node -
//   push value of node to var that stores the values
// if node has a left property, call help fn w / left property on node
// if node has a right property, call help fn w / right property on node
// invoke helper fn with the current var
// return array of values


let isSymmetric = function (root) {
  if (!root) return true;
  return dfs(root.left, root.right);

  function dfs(leftNode, rightNode) {
    if (!leftNode && !rightNode) {
      return true;
    }
    if (leftNode && !rightNode || !leftNode && rightNode || leftNode.val !== rightNode.val) {
      return false;
    }
    return dfs(leftNode.right, rightNode.left) && dfs(leftNode.left, rightNode.right);
  }
};