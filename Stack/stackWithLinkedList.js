class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class StackLinkedList {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  // Push item onto stack
  push(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.size++;
  }

  // Pop item from stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    const poppedValue = this.top.value;
    this.top = this.top.next;
    this.size--;
    return poppedValue;
  }

  // Peek the top item
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.top.value;
  }

  // Check if stack is empty
  isEmpty() {
    return this.size === 0;
  }

  // Get the size of the stack
  size() {
    return this.size;
  }

  // Clear the stack
  clear() {
    this.top = null;
    this.size = 0;
  }
}

// Example usage
const stackLinkedList = new StackLinkedList();
stackLinkedList.push(10);
stackLinkedList.push(20);
console.log(stackLinkedList.peek()); // 20
stackLinkedList.pop();
console.log(stackLinkedList.peek()); // 10
