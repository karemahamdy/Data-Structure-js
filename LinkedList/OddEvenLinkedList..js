// 328. Odd Even Linked List
// Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.
// The first node is considered odd, and the second node is even, and so on.
// Note that the relative order inside both the even and odd groups should remain as it was in the input.
// You must solve the problem in O(1) extra space complexity and O(n) time complexity.

// Input: head = [2, 1, 3, 5, 6, 4, 7]
// Output: [2, 3, 6, 7, 1, 5, 4]

function ListNode(val = 0, next = null) {
  this.val = val;
  this.next = next;
}

var oddEvenList = function (head) {
  if (!head || !head.next || !head.next.next) {
    return head;
  }

  let odd = head;
  let even = head.next;
  let evenHead = even;

  while (even && even.next) {
    odd.next = even.next;
    odd = odd.next;

    even.next = odd.next;
    even = even.next;
  }

  odd.next = evenHead;

  return head;
};
