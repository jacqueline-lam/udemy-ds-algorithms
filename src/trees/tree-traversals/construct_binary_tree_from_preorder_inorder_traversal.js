/*
105. Construct Binary Tree from Preorder and Inorder Traversal
(Medium)

Given two integer arrays `preorder` and `inorder`
where `preorder` is the preorder traversal of a binary tree and
`inorder` is the inorder traversal of the same tree,
construct and return the binary tree.



Example 1:
    3
9       20
      15   7
Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]

Example 2:
Input: preorder = [-1], inorder = [-1]
Output: [-1]

Constraints:
* 1 <= preorder.length <= 3000
* norder.length == preorder.length
* -3000 <= preorder[i], inorder[i] <= 3000
* preorder and inorder consist of unique values.
* Each value of inorder also appears in preorder.
* preorder is guaranteed to be the preorder traversal of the tree.
* inorder is guaranteed to be the inorder traversal of the tree.

Topics:
Array, Hash Table, Divide & Concur, Tree, Binary Tree,
In-order: traverse entire L, visit node, then traverse R
Pre-order: visit node, traverse L, then traverse R
*/


/*
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }

 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 *
 */

/*
Thoughts:
Pre-order array: root node.val is the first ele
in-order array doesn't contain duplicate values, from in-order array we can find out idx of root value
with idx, we can cal how many nodes are there in L and R subtrees, nased on these info we can recursively rebuild whole tree

E.g.
    3
9       20
      15   7

preorder = [3,(9),[20,15,7]]
inorder  = [(9),3,[15,20,7]]
Output: [3,9,20,null,null,15,7]

build left subtree using:
preoder: 9
inorder: 9

build right subtree:
preorder: 20,15,7
inorder: 15,20,7

 */

// binary tree node
class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}


// Time: O(N) as each noce is visited once
// Runtime: 88 ms, faster than 87.80% of JavaScript
// Memory Usage: 44.8 MB, less than 86.70% of JavaScript
let buildTree = function (preorder, inorder) {
  function helper(p1, p2, i1, i2) {
    if (p1 > p2 || i1 > i2) return null; // sanity check

    let value = preorder[p1], // get root value
      iIdx = inorder.indexOf(value), // get root position inside inorder
      nodesL = iIdx - i1, // count nodes in left subtree
      root = new TreeNode(value);

    // build left and right subtrees RECURSIVELY
    root.left = helper(p1 + 1, p1 + nodesL, i1, iIdx - 1);
    root.right = helper(p1 + nodesL + 1, p2, iIdx + 1, i2);

    return root; // don't forget to return treeNode root
  }
  return helper(0, preorder.length - 1, 0, inorder.length - 1);
};

// Example:
//      3
// 9       20
//       15   7
// preorder = [3,(9),[20,15,7]]
// inorder  = [(9),3,[15,20,7]]
// helper(p1=0, p2= 4, i1=0, i2=4)
// *v = 3 (root), iIdx=1, nodesL=1-0=1*

// root.left = helper(p1=1, p2=0+1, i1=0, i2=1-1=0)
// Left subtree (root.left)
// *v = 9, iIdx=0, nodesL=0-1=-1*
// root.left = helper(p1=1+0=1,p2=1+-1=0, i1=0, i2=1=1=0) => p1=1>p2=0 so NULL
// root.right = helper(p1=1+-1+1=1, p2=1, i1=0+1=1, i2=0) => i1=1>i2=0 so NULL

// root.right = helper(p1 =p1(0)+nodesL(1)+1=2, p2=length=4, i1=iIdx(1)+1=2, i2=4)
// Right subtree (root.right)
// *v= preorder[p1=2] = 20, iIdx = inorder.indexOf(20)=3, nodesL = iIdx(3)-i1(2)=1, root.val = 20*
// root.left = helper(p1=p1(2)+1=3, p2=p1(2)+nodesL(1)=3, i1=i1(2) i2=iIdx(3)-1=2
//=> root.val = preorder[p1=3] =15, iIdx=2, nodesL= 2-2=0
// root.left ==> helper(p1(3)+1=4,p2= 3+0=3...) => p1>p2 so NULL
// root.right => NULL
// root.right = helper(p1=p1(2)+nodesL(1)+1=4, p2=p2(4), i1=iIdx(3)+1=4 ,i2=4)
// => root.val = preorder[p1=4] = 7, iIdx =4, nodesL=iIdx(4)-i1(4)=0
// root.left => NULL
// root.right => NULL

// Output: [3,9,20,null,null,15,7]

// Same solution with cache for inorder index lookup.
var buildTree = function (preorder, inorder) {
  let inOrderIndexLookup = new Map();

  //since inorder does not contain duplicates, we will have one entry for each node;
  // Hash - accessing idx will only cost O(1) - instead of O(N) with indexOf()
  for (let i = 0, len = inorder.length; i < len; i++) {
    // {nodeVal: index in order arr}
    inOrderIndexLookup.set(inorder[i], i);
  }

  function helper(pre1, pre2, in1, in2) {
    if (pre1 > pre2 || in1 > in2) return null;

    let value = preorder[pre1];
    let index = inOrderIndexLookup.get(value);
    let leftTreeNodeCount = index - in1;
    let root = new TreeNode(value);

    root.left = helper(pre1 + 1, pre1 + leftTreeNodeCount, in1, index - 1);
    root.right = helper(pre1 + leftTreeNodeCount + 1, pre2, index + 1, in2);
    return root;
  }

  return helper(0, preorder.length - 1, 0, inorder.length - 1);
};
