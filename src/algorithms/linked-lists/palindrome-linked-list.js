// Palindrome Linked List

// Given a singly linked list, determine if it is a palindrome.

// Example 1:
// Input: 1->2
// Output: false

// Example 2:
// Input: 1->2->2->1
// Output: true


// Follow up:
// Could you do it in O(n) time and O(1) space?

// -------- ANSWER ----------
// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @return {boolean}
//  */

// WHEN ASKED ABOUT SLL PALINDROME => USE STRINGS TO SIMPLIFY
// O(n) time and O(n) space
let isPalindrome = function (head) {
  let current = '', reverse = '';
  // convert SLL to strings
  while (head) {
    current += head.val; // '' + 1 -> '1' + 2 = '12'
    reverse = head.val + reverse; // 1 + '' -> 2+ '1' = '21'
    head = head.next;
  }
  // compare og str with reverse str of SLL
  return current === reverse; // '12' ≠ '21' => FALSE
};

// O(N) time and O(1) SPACe
function isPalindromeB(head) {
  let fast = head;
  let slow = head;

  // Set slow to the head of the second half
  // find midpoint without finding length of SLL first
  while (fast) {
    fast = fast.next ? fast.next.next : fast.next;
    slow = slow.next;
  }

  // Reverse the second half
  let prev = null;
  while (slow) {
    const next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }

  // Compare the two halves in sequence
  while (prev) { // first num in reversed list
    if (prev.val !== head.val) {
      return false;
    }
    prev = prev.next;
    head = head.next;
  }

  return true;
}

// Set slow to head of second half
// 1    2    2    1
// f,s

// 1    2    2    1
//      s    f

// 1    2    2    1    null
//           s          f

// Reverse 2nd half
// 2    1
// next = slow.next = 1  -> null
// 2.next = prev = null  -> 2
// prev = slow = 2       -> 1
// slow = next = 1       -> null

// Compare 2 halves
// prev = first num in reversed 2nd half
// prev.val=1 === head.val=1    -> 2 === 2
// prev=prev.next=1.next=2      -> 2.next=null
// head=head.next=2             -> head.next=2.next=2
// RETURN TRUE
