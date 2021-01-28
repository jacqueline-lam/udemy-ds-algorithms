// Given `head`, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the `next` pointer.
// Internally, `pos` is used to denote the index of the node that tail's `next` pointer is connected to.
// Note that `pos` is not passed as a parameter.
// Return true if there is a cycle in the linked list.
// Otherwise, return false.



// Example 1:
// Input: head = [3, 2, 0, -4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node(0 - indexed).

//   Example 2:
// Input: head = [1, 2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

//   Example 3:
// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.

//   Constraints:
// The number of the nodes in the list is in the range[0, 104].
// - 105 <= Node.val <= 105
// pos is - 1 or a valid index in the linked - list.


// Follow up: Can you solve it using O(1)(i.e.constant) memory ?

// ------- ANSWER -------
// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */

// /**
//  * @param {ListNode} head
//  * @return {boolean}
//  */

// APORACH 1: HASH TABLE
// 76ms Runtime
// O(N) time — visit n elements at most once + O(1) adding node to hash table
// O(N) space — depends on # ele added to hash — contains n elements at most
let hasCycle = function (head) {
  // use Set —  a special type collection – “set of values” (without keys),
  //  where each value may occur only once.
  const nodes = new Set();

  while (head) {
    if (nodes.has(head)) return true;
    nodes.add(head);
    head = head.next;
  }
  return false;
};


// APPRROACH 2: Floyd's Cycle Finding Algorithm
// if you have 1 item moving twice as fast as other one, they will eventually meet
// SPACE reduced to O(1) by onsidering two pointers at different speed -
// a slow pointer and a fast pointer.

// TIME: O(N)
// List has no cycle:
// fast pointer reaches end first and run time depends on the list's length, which is O(n)
// List has a cycle:
// break down movement of slow pointer into 2 steps
// #iterations = non-cyclic length = N
// distance btwn 2 pointers / diff in speed = at most cyclic length K /1
// O(N) + O(K) = O(N)

let hasCycleB = function (head) {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    // The slow pointer moves 1 at a time v.s. fast pointer moves 2 at a time
    fast = fast.next.next;
    slow = slow.next;

    // pointers met = there is a cycle
    if (fast === slow) return true;
  }
  // if no cycle in the list, the fast pointer will eventually reach the end
  // and we can return false in this case
  return false;
}

// 3    2    0   -4, pos = 1
//                     *
// 3    2    0   -4    2    0   -4
// f,s
// 3    2    0   -4    2    0   -4
//      s        f
// 3    2    0   -4    2    0   -4
//           s              f
// TRUE

// 1 , post = -1
// fast.next === null => FALSE