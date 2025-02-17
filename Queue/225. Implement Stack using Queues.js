// Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).
// Implement the MyStack class:
// void push(int x) Pushes element x to the top of the stack.
// int pop() Removes the element on the top of the stack and returns it.
// int top() Returns the element on the top of the stack.
// boolean empty() Returns true if the stack is empty, false otherwise.

class MyStack {
  constructor() {
      this.q = [];
  }

  push(x) {
      this.q.push(x);
      for (let i = 0; i < this.q.length - 1; i++) {
          this.q.push(this.q.shift());
      }
  }

  pop() {
      return this.q.shift();
  }

  top() {
      return this.q[0];
  }

  empty() {
      return this.q.length === 0;
  }
}