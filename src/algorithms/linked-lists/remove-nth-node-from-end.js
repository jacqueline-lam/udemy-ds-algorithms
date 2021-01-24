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
// 76ms — Time O(2L-n); Space O(1)
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

// One pass solution — 2 pointer approach
// Time O(L); Space O(1)
removeNthFromEndB(head, n) {
  let dummy = new ListNode(0);
  dummy.next = head;
  // 1st pointer advances the list by n+1 steps from the beginning,
  let first = dummy;
  // 2nd pointer starts from the beginning of the list
  let second = dummy;


  // Advances first pointer so that the gap between first and second is n nodes apart
  for (let i = 1; i <= n + 1; i++) {
    first = first.next;
  }
  // Now, both pointers are exactly separated by `n` nodes apart.
  // We maintain this constant gap by advancing both pointers together
  // until the first pointer arrives past the last node.
  // Move first to the end, maintaining the gap
  while (first != null) {
    first = first.next;
    second = second.next;
  }
  // The second pointer will be pointing at the nth node counting from the last.
  // Relink next pointer of the node referenced by the second pointer
  // to point to the node's next next node.
  // hence remove nth node
  second.next = second.next.next;
  return dummy.next;
}

// removeNthFromEndB([1,2,3,4,5], 2)
//     head
// D    1    2    3    4    5
// i,j

// D    1    2    3    4    5
// ji ->  ->  ->  i

// D    1    2    3    4    5   null
//                j              i
// D    1    2    3    4    5   null
//                j  x X x       i
// D    1    2    3    5   null
//                j          i

