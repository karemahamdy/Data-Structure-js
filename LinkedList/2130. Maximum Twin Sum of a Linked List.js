// In a linked list of size n, where n is even, the ith node(0 - indexed) of the linked list is known as the twin of the(n - 1 - i)th node, if 0 <= i <= (n / 2) - 1.
// For example, if n = 4, then node 0 is the twin of node 3, and node 1 is the twin of node 2. These are the only nodes with twins for n = 4.
// The twin sum is defined as the sum of a node and its twin.
// Given the head of a linked list with even length, return the maximum twin sum of the linked list.

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

var pairSum = function (head) {
  let slow = head, fast = head;

  // Step 1: Find the middle of the linked list
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Step 2: Reverse the second half of the list
  let prev = null, curr = slow;
  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  // Step 3: Compute twin sums and find the maximum
  let maxSum = 0;
  let first = head, second = prev;
  while (second) {
    maxSum = Math.max(maxSum, first.val + second.val);
    first = first.next;
    second = second.next;
  }

  return maxSum;
};

