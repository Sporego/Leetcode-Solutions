/**
 * // This is the ImmutableListNode's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function ImmutableListNode() {
 *    @ return {void}
 *    this.printValue = function() { // print the value of this node.
 *       ...
 *    };
 *
 *    @return {ImmutableListNode}
 *    this.getNext = function() { // return the next node.
 *       ...
 *    };
 * };
 */

/**
 * @param {ImmutableListNode} head
 * @return {void}
 */
var printLinkedListInReverse = function (head) {
  const array = [];
  let current = head;
  while (current.getNext() !== null) {
    array.push(current);
    current = current.getNext();
  }
  current.printValue();
  while (array.length !== 0) {
    array.pop().printValue();
  }
};

var printLinkedListInReverseRecursive = function (head) {
  if (head.getNext()) {
    printLinkedListInReverseRecursive(head.getNext());
  }
  return head.printValue();
};
