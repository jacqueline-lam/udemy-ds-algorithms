/*
98. Validate Binary Search Tree

Given the root of a binary tree,
determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:
* The left subtree of a node contains only nodes with keys LESS THAN the node's key.
* The right subtree of a node contains only nodes with keys GREATER THAN the node's key.
* Both the left and right subtrees must also be binary search trees.


Example 1:
Input: root = [2,1,3]
  2
1   3
Output: true

Example 2:
Input: root = [5,1,4,null,null,3,6]
  5
1   4
   3  6
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.


Constraints:
The number of nodes in the tree is in the range [1, 104].
-231 <= Node.val <= 231 - 1

Topics:
Tree, DFS, Binary Search Tree, Binary Tree

Thoughts:
DFS InOrder
if (node.right < node.val) return false
if (node.left > node.val) return false
or...Traverse and store nodes in data, compare data with root at the end?
*/

/*
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }

 * @param {TreeNode} root
 * @return {boolean}
 */

// Pre-order DFS
// Runtime: 76 ms, faster than 83.65% of JavaScript
// Memory Usage: 46.4 MB, less than 49.56% of JavaScript
// Approach: Scan every single node in the tree and see if the node's value matches the BST rules,
// — all the values in node's left subtree are less than the value in node,
// and all the values in node's right subtree are greater than the value in node,
// if we found a node that doesn't satisfy the rules,
// simply return false from the recursion.

let isValidBST = function (root) {
  function helper(root, min, max) {
    // We've reached end of path
    if (!root) return true;

    // Current node's val doesn't satisy BST rules
    if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) {
      return false;
    }

    // Continue to scan left and right
    return helper(root.left, min, root.val) && helper(root.right, root.val, max);
  }

  if (root === null) return true; //passing test case '[]'
  return helper(root, null, null);
}

//Similar to above - refactored
let isValidBST = function (root, min = null, max = null) {
  if (!root) return true;
  if (min && root.val <= min.val) return false;
  if (max && root.val >= max.val) return false;
  // V. IMPORTANT LOGIC BELOW:
  return isValidBST(root.left, min, root) && isValidBST(root.right, root, max);
};

// [2,1,3]
//  2
// 1  3
// isValid (2, null, null)
// isValidBST(1,min=null,max=2) && isValidBST(3, min=2, max=null)
// min=null so skip
// max=2, root=1 not > max=2 so continue;
// --
// min=2, max = null; min && root=3 NOT < min=2
// isValid(null, null, root=1) && isValid(null, root=3, max=null) // => root=null so TRUE


// DFS InOrder - PREFERRED, easier to understand
// Runtime: 144 ms, faster than 8.99% of JavaScript
// Memory Usage: 50.1 MB, less than 5.02% of JavaScript
let isValidBST = function (root) {
  function inOrder(node) {
    if (!node) return [];
    // In-order DFS
    // Destructive assignment - rest operator collect remaining own enumerable property
    return [...inOrder(node.left), node.val, ...inOrder(node.right)]
  }

  const sortedArr = inOrder(root);

  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i + 1] <= sortedArr[i]) return false;
  }
  return true;
}

// Input: root = [5,1,4,null,null,3,6]
// [ 1 ]
// [ 3 ]
// [ 6 ]
// [ 3, 4, 6 ]
// [ 3 ]
// [ 6 ]
// [ 1, 5, 3, 4, 6 ]
// -> False