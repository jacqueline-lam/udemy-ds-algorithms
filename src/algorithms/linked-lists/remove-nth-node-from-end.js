// Remove Nth Node From End of List

// Given the head of a linked list,
// remove the nth node from the end of the list
// and return its head.
// Follow up: Could you do this in one pass?

// Example 1:
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

// Example 2:
// Input: head = [1], n = 1
// Output: []

// Example 3:
// Input: head = [1,2], n = 1
// Output: [1]


// Constraints:
// The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz

// Hint:
// Maintain two pointers and update one with a delay of n steps.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// /**
//  * @param {ListNode} head
//  * @param {number} n
//  * @return {ListNode}
//  */

// Approach #1: Two pass algorithm -> remove (L-n+1) node
// 76ms
// Pass #1: find list length L; set pointer to dummy node +
// move thru list until (L-n) node
// Relink next of (L-n) node to (L-n+2)
let removeNthFromEnd = function (head, n) {
  function findLength(node) {
    if (!node) return 0;
    return findLength(node.next) + 1; //[1,2]
    //=> findLength(1.next) + 1
    // => findLength(2) + 1
    // => findLength(2.next) + 1 => 0
    // 0 + 1 + 1 = 2
  };

  const length = findLength(head);
  let idx = length - n - 1; //nth idx to be removed
  let curr = head;

  // edge case - null
  if (idx < 0) return head.next
  // increment until one node before nth node
  while (idx--) curr = curr.next;
  // remove nth node
  curr.next = curr.next.next;
  return head;
};

