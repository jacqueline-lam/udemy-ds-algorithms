// Reverse Linked List

// Reverse a singly linked list.
// Example:
// Input: 1 -> 2 -> 3 -> 4 -> 5 -> NULL
// Output: 5 -> 4 -> 3 -> 2 -> 1 -> NULL

// Follow up:
// A linked list can be reversed either iteratively or recursively.
// Could you implement both ?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
//
//  * @param {ListNode} head
//  * @return {ListNode}


let reverseList = function (head) {
  // Initialize 3 pointes `prev`, `curr`, & `next`
  let prev = null;
  let current = head;
  let next;

  while (current) {
    // Iterate through linked list
    // store next before altering curr.next
    next = current.next;
    // Change next of current (REVERSING)
    current.next = prev;
    // move prev and curr one step forward
    prev = current;
    current = next;
  }
  return prev;
};

// Iteratively
reverseList([100, 201, 250, 350, 999])
//       100   201   250   350   999
// prev  curr next                    -> 100.next = prev; prev = current = 100; current = next = 201; => [100, null]
//       100   201   250   350   999
//       prev  curr                   -> 201.next = 100 => [201, 100, null]
//       100   201   250   350   999
//             prev curr              -> 250.next = 201 => [250, 201, 100, null]
//       100   201   250   350   999
//                   prev  curr       -> 350.next = 250 => [350, 250, 201, 100, null]
//       100   201   250   350   999
//                         prev  curr -> 999.next = 350 => [999, 350, 250, 201, 100, null]
//       100   201   250   350   999
//                               prev  curr   -> return prev


// Recursively
let reverseListRecursively = function (head) {
  const reverse = (currNode, prevNode = null) => {
    // return first node after everything is reversed
    if (currNode === null) return prevNode

    const nextNode = currNode.next
    currNode.next = prevNode

    return reverse(nextNode, currNode)
  }

  return reverse(head) // reverse(100,null)-> return reverse(201, 100)...
};