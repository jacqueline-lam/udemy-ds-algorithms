// 141. Linked List Cycle

/*
Given head, the head of a linked list, determine if the linked list has a CYCLE in it.

There is a cycle in a linked list if there is some node in the list that can be reached again
by continuously following the next pointer.
Internally, pos is used to denote the index of the node that tail's next pointer is connected to.
Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

 Example 1:
Input: head = [3,2,0,-4], pos = 1
// [3,2,0,-4->2,0,-4]
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

Example 2:
Input: head = [1,2], pos = 0
// [1,2,->1,2]
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

Example 3:
Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.

Example 4:
Input: [1,2], pos = -1 (INVALID)
Output: false

Constraints:
The number of the nodes in the list is in the range [0, 104].
-105 <= Node.val <= 105
pos is -1 or a valid index in the linked-list.

Follow up: Can you solve it using O(1) (i.e. constant) memory?
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

//  * @param {ListNode} head
//  * @return {boolean}

// APORACH 1: SET/ FREQUENCY COUNTER
// 76ms Runtime
// O(N) time — visit n elements at most once + O(1) adding node to hash table
// O(N) space — depends on # ele added to hash — contains n elements at most
// TIME: 80 ms	SPACE: 45.9 MB
let hasCycle = function (head) {
  // use Set —  a special type collection – “set of values” (without keys),
  //  where each value may occur only once.
  const nodes = new Set();

  while (head) {
    // console.log('nodes OG=', nodes)
    if (nodes.has(head)) return true;
    nodes.add(head);
    head = head.next;
    // console.log('nodes NEW=', nodes)
  }
  return false;
};
// Example 1 - [1,2]; pos=-1
// nodes OG= Set(0) {}
// nodes NEW= Set(1) { [1,2] }
// nodes OG= Set(1) { [1,2] }
// nodes NEW= Set(2) { [1,2], [2] }

// Example 2 — [1,2]; pos=0
// lookup OG= Set(0) {}
// lookup NEW= Set(1) { Error - Found cycle in the ListNode }
// lookup OG= Set(1) { Error - Found cycle in the ListNode }
// lookup NEW= Set(2) {
//   Error - Found cycle in the ListNode,
//   Error - Found cycle in the ListNode
// }
// lookup OG= Set(2) {
//   Error - Found cycle in the ListNode,
//   Error - Found cycle in the ListNode
// }
// Output: True; Expected: True


// APPRROACH 2: Floyd's Cycle Finding Algorithm
// Space complexity can be reduced to O(1) by considering two pointers at different speed -
// a slow pointer and a fast pointer.
// The slow pointer moves 1 step at a time v.s. fast pointer moves 2 steps at a time.

//TIME:108 ms	SPACE: 44.8 MB
let hasCycleB = function (head) {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    // console.log('fast = ', fast)
    slow = slow.next;
    // console.log('slow = ', slow)

    // pos 2 vs. 1, 4 vs. 2, 6 vs. 3
    if (fast === slow) return true;
  }
  // if no cycle in the list, the fast pointer will eventually reach the end
  //  and we can return false in this case
  return false;
}
// 3    2    0   -4, pos = 1
// 3    2    0   -4    2    0   -4
// f,s
// 3    2    0   -4    2    0   -4
//      s    f
// 3    2    0   -4    2    0   -4
//           s         f
// 3    2    0   -4    2    0   -4
//                s             f
// TRUE

// [3,2,0,-4], pos=-1
// fast =  [0,-4]
// slow =  [2,0,-4]
// fast =  null
// slow =  [0,-4]


// OG NAIVE WRONG ANSWER -> ONLY WORKS IF NO DUPLICATE NUM USED
let hasCycleBAD = function (head) {
  let lookup = {};
  let current = head;
  while (current) {
    if (lookup[current.val]) {
      return true
    } else {
      lookup[current.val] = 1;
    }

    current = current.next;
  }
  return false;
};
/*
lookup[current]= [-21,10,17,8,4,26,5,35,33,-7,-16,27,-12,6,29,-12,5,9,20,14,14,2,13,-24,21,23,-21,5] undefined
lookup=  { '-21': 1 }
lookup[current]= [10,17,8,4,26,5,35,33,-7,-16,27,-12,6,29,-12,5,9,20,14,14,2,13,-24,21,23,-21,5] undefined
lookup=  { '10': 1, '-21': 1 }
lookup[current]= [17,8,4,26,5,35,33,-7,-16,27,-12,6,29,-12,5,9,20,14,14,2,13,-24,21,23,-21,5] undefined
lookup=  { '10': 1, '17': 1, '-21': 1 }
lookup[current]= [8,4,26,5,35,33,-7,-16,27,-12,6,29,-12,5,9,20,14,14,2,13,-24,21,23,-21,5] undefined
lookup=  { '8': 1, '10': 1, '17': 1, '-21': 1 }
lookup[current]= [4,26,5,35,33,-7,-16,27,-12,6,29,-12,5,9,20,14,14,2,13,-24,21,23,-21,5] undefined
lookup=  { '4': 1, '8': 1, '10': 1, '17': 1, '-21': 1 }
lookup[current]= [26,5,35,33,-7,-16,27,-12,6,29,-12,5,9,20,14,14,2,13,-24,21,23,-21,5] undefined
lookup=  { '4': 1, '8': 1, '10': 1, '17': 1, '26': 1, '-21': 1 }
lookup[current]= [5,35,33,-7,-16,27,-12,6,29,-12,5,9,20,14,14,2,13,-24,21,23,-21,5] undefined
lookup=  { '4': 1, '5': 1, '8': 1, '10': 1, '17': 1, '26': 1, '-21': 1 }
lookup[current]= [35,33,-7,-16,27,-12,6,29,-12,5,9,20,14,14,2,13,-24,21,23,-21,5] undefined
lookup=  {
  '4': 1,
  '5': 1,
  '8': 1,
  '10': 1,
  '17': 1,
  '26': 1,
  '35': 1,
  '-21': 1
}
lookup[current]= [33,-7,-16,27,-12,6,29,-12,5,9,20,14,14,2,13,-24,21,23,-21,5] undefined
lookup=  {
  '4': 1,
  '5': 1,
  '8': 1,
  '10': 1,
  '17': 1,
  '26': 1,
  '33': 1,
  '35': 1,
  '-21': 1
}
lookup[current]= [-7,-16,27,-12,6,29,-12,5,9,20,14,14,2,13,-24,21,23,-21,5] undefined
lookup=  {
  '4': 1,
  '5': 1,
  '8': 1,
  '10': 1,
  '17': 1,
  '26': 1,
  '33': 1,
  '35': 1,
  '-21': 1,
  '-7': 1
}
lookup[current]= [-16,27,-12,6,29,-12,5,9,20,14,14,2,13,-24,21,23,-21,5] undefined
lookup=  {
  '4': 1,
  '5': 1,
  '8': 1,
  '10': 1,
  '17': 1,
  '26': 1,
  '33': 1,
  '35': 1,
  '-21': 1,
  '-7': 1,
  '-16': 1
}
lookup[current]= [27,-12,6,29,-12,5,9,20,14,14,2,13,-24,21,23,-21,5] undefined
lookup=  {
  '4': 1,
  '5': 1,
  '8': 1,
  '10': 1,
  '17': 1,
  '26': 1,
  '27': 1,
  '33': 1,
  '35': 1,
  '-21': 1,
  '-7': 1,
  '-16': 1
}
lookup[current]= [-12,6,29,-12,5,9,20,14,14,2,13,-24,21,23,-21,5] undefined
lookup=  {
  '4': 1,
  '5': 1,
  '8': 1,
  '10': 1,
  '17': 1,
  '26': 1,
  '27': 1,
  '33': 1,
  '35': 1,
  '-21': 1,
  '-7': 1,
  '-16': 1,
  '-12': 1
}
lookup[current]= [6,29,-12,5,9,20,14,14,2,13,-24,21,23,-21,5] undefined
lookup=  {
  '4': 1,
  '5': 1,
  '6': 1,
  '8': 1,
  '10': 1,
  '17': 1,
  '26': 1,
  '27': 1,
  '33': 1,
  '35': 1,
  '-21': 1,
  '-7': 1,
  '-16': 1,
  '-12': 1
}
lookup[current]= [29,-12,5,9,20,14,14,2,13,-24,21,23,-21,5] undefined
lookup=  {
  '4': 1,
  '5': 1,
  '6': 1,
  '8': 1,
  '10': 1,
  '17': 1,
  '26': 1,
  '27': 1,
  '29': 1,
  '33': 1,
  '35': 1,
  '-21': 1,
  '-7': 1,
  '-16': 1,
  '-12': 1
}
lookup[current]= [-12,5,9,20,14,14,2,13,-24,21,23,-21,5] undefined
// OUPUT: True; EXPECTED: False;
*/