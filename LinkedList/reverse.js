// 206. Reverse Linked List
// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Input: head = [1, 2, 3, 4, 5]
// Output: [5, 4, 3, 2, 1]

var reverseList = function (head) {
  let node = null;

  while (head) {
    const temp = head.next;
    head.next = node;
    node = head;
    head = temp;
  }

  return node;
};