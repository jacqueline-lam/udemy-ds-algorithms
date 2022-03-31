// Find Second Largest Item in Binary Search Tree (Interview Cake)

// Thoughts
// the largest ele is simply "rightmost" ele
// Recursive approach -
// if there is a R child, stwp down to child and recurse,
// else at "rightmost" so return its val
// Second largest ele =
// IF largest doesn't have a left subtree -> parent of largest
// if have L subtree, ,find largest item in that L subtree

// function findSecondLargest(root) {
//   // helper to find largest

//   function findLargest(curr = root) {
//     while (curr) {
//       if (!curr.right) return curr.value;
//       curr = curr.right;
//     }
//   }


//   if (!root || (!root.left && !root.right)) return null;
//   // throw new Error('Tree must at least have 2 nodes')
//   let largest = findLargest(root);

//   // curr is largest and has a LEFT subree
//   if (largest.left) {
//     return findLargest(largest.left);
//   }

//   // Curr is parent of largest, and largest has no children
//   // CAN'T GET BACK TO PARENT OF LARGEST SO MUST FIND LAGEST IN THIS FN
// }

// Strategy:
// 1. Find first largest ele
// 2. Find 2nd largest by diviidning into 2 cases:
//  a. The largest node has a left subtree
//  b.  The largest node does NOT have a left subtree

//  Solution
// Time: One walk down BST — O(h) time where h is height of tree
// o(log n) if tree is balanced, o(n) otherwise
// Space: O(1)
function findSecondLargest(root) {
  function findLargestInSubtree(curr = root) {
    while (curr) {
      if (!curr.right) return curr.value;
      curr = curr.right;
    }
  }

  let current = root;
  while (current) {
    if (!root || (!root.left && !root.right)) return null;
    // throw new Error('Tree must at least have 2 nodes')

    // current is now largest and has a LEFT subtree
    if (current.left && !current.right) {
      return findLargestInSubtree(largest.left);
    }
    // Largest node does NOT have LEFT subtree
    // current is parent of largest, and largest has no children
    if (
      current.right
      && !current.right.left
      && !current.right.right
    ) {
      return current.value;
    }

    current = current.right;
  }
}

// IF we have a L subtree but not a R subtree
  // the current node = largest overall
  // 2nd largest must be largest ele in L subtree

// IF we have R child, but R child doesn't have any children
  // then right child is largest ele and Current ele is 2nd largest
// ELSE we have R subtree w/ > 1 ele, largest and second largest are somewhere in that subtree
  // Step right
