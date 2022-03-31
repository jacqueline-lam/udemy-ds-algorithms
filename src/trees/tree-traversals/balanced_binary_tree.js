/*
Interview Cake Question
Write a function to see if a binary tree is "superbalanced"
( a new tree property we just made up)
- superbalanced if the diff between depths of any two leaf nodes
 is no greater than 1.
 - leaf node = node with no children

DFS approach - to short circuit and return false as soon as it finds 2 leaves with depths more than 1 apart
- hit leaves asap

*/

function isBlanced(root) {
  // edge case - no node = superbalanced
  if (!root) return true;

  // short circuit as soon as we find >2
  const depths = [];

  // Nodes will store pairs of a node and node's depth
  const nodes = [];
  nodes.push([root, 0])

  while (nodes.length) {
    // Pop node and its depth from top of out stack
    const nodePair = nodes.pop();
    const node = nodePair[0];
    const depth = nodePair[1];

    if (!node.left && !node.right) {
      // Case: we found a leaf
      // Only care if it's a new depth
      if (depths.indexOf(depth) < 0) {
        depths.push(depth)
      }
    } else {
      // Case: this isn't a leaf - keep stepping down
    }
  }
}