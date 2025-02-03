class StackArray {
  constructor() {
    this.stack = [];
  }

  // Push item onto stack
  push(item) {
    this.stack.push(item);
  }

  // Pop item from stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stack.pop();
  }

  // Peek the top item
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stack[this.stack.length - 1];
  }

  // Check if stack is empty
  isEmpty() {
    return this.stack.length === 0;
  }

  // Get the size of the stack
  size() {
    return this.stack.length;
  }

  // Clear the stack
  clear() {
    this.stack = [];
  }
}

// Example usage
const stackArray = new StackArray();
stackArray.push(10);
stackArray.push(20);
console.log(stackArray.peek()); // 20
stackArray.pop();
console.log(stackArray.peek()); // 10
