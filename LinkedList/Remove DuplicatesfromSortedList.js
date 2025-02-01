// 83. Remove Duplicates from Sorted List
// Given the head of a sorted linked list, delete all duplicates such that each element appears only once.Return the linked list sorted as well.
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

var deleteDuplicates = function (head) {
  let current = head;

  while (current !== null && current.next !== null) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
};
