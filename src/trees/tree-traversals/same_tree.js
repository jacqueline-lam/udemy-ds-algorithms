/*

100. Same Tree (Easy)

Given the roots of two binary trees p and q,
write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.



Example 1:
   1           1
2     3     2     3

Input: p = [1,2,3], q = [1,2,3]
Output: true

Example 2:
  1        1
2            2

Input: p = [1,2], q = [1,null,2]
Output: false

Example 3:
  1         1
2   1     1   2

Input: p = [1,2,1], q = [1,1,2]
Output: false


Constraints:
The number of nodes in both trees is in the range [0, 100].
-104 <= Node.val <= 104

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }

 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

// Brute force first - build two arrays and compare
// Too long - time exceeded
// let isSameTree = function (p, q) {
//   const convertToArray = (root) => {
//     let queue = [root];
//     let data = [];

//     while (queue.length) {
//       const node = queue.shift();
//       data.push(node === 0 ? 0 : node.val);
//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);
//     }

//     return data;
//   }
//   let qData = convertToArray(p);
//   let pData = convertToArray(q);

//   for (let i = 0; i < qData.length; i++) {
//     if (qData[i] !== pData[i]) return false;
//   }
//   return true;
// };

// Recursion
// preorder traversal for both trees at the same pace,
// simply return false whenever we found a mismatch,
// otherwise continue traversal on both L and R subtrees.
// ----------------------
// Time complexity: O(N)
// Space complexity: O(1) (ignore recursion stack, otherwise the height of the tree)
// Runtime: 75 ms, faster than 61.33% of JavaScript
// Memory Usage: 42.5 MB, less than 46.80% of JavaSript
let isSameTree = function (p, q) {
  // same if both nodes are null
  if (!p && !q) return true;
  // not same if either nodes is null or the values are different
  if (!p || !q || p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}


// BFS
// Runtime: 93 ms, faster than 30.41% of JavaScript
// Memory Usage: 42.1 MB, less than 84.94% of JavaScript
// O(N) Space because queue getting longer directly in propotion to length of tree
function isSameTreeBFS(p, q) {
  const queue = [p, q];
  while (queue.length > 0) {
    const first = queue.shift();
    const second = queue.shift();

    if (!first && !second) continue;
    if (!first || !second || first.val !== second.val) return false;

    queue.push(first.left);
    queue.push(second.left);
    queue.push(first.right);
    queue.push(second.right);
  }

  return true;
}
//BFS LONGER VERSION
const isSameTreeBFS = function (p, q) {
  const q1 = [];
  q1.push(p);

  const q2 = [];
  q2.push(q);

  while (q1.length && q2.length) {
    const curr1 = q1.shift();
    const curr2 = q2.shift();

    // checking null
    if (curr1 === null || curr2 === null) {
      if (curr1 !== curr2) {
        return false;
      } else {
        continue;
      }
    }

    // checking val
    if (curr1.val !== curr2.val) return false;

    // adding children to queues
    q1.push(curr1.left, curr1.right);
    q2.push(curr2.left, curr2.right);
  }

  if (q1.length || q2.length) {
    return false;
  }

  return true;
};


// AID
// Runtime: 56 ms, faster than 97.06%
// Memory Usage: 42.6 MB, less than 21.25%
let isSameTree = function (p, q) {
  // console.log(JSON.stringify(p))
  return JSON.stringify(p) === JSON.stringify(q)
};
/* {"val":1,
"left":{"val":2,"left":null,"right":null},
"right":{"val":3,"left":null,"right":null}}
 */
