// Given the head of a singly linked list, reverse the list, and return the reversed list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

var reverseList = function (head) {
  if (head === null) {
    return null;
  }

  //     Declarations `prev` and `curr` are in perspective of original list
  let prev = null;
  let curr = head;

  let reversedList; // Early declaration because of scope limitations: We cannot access the data inside the while block from outside the block

  while (curr !== null) {
    let tempVal = curr.val;
    reversedList = new ListNode(curr.val, prev);
    prev = reversedList;
    curr = curr.next;
  }
  return reversedList;
};
