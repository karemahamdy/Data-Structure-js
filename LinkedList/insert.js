class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // 📌 إدراج في بداية القائمة
  insertFirst(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  // 📌 إدراج في نهاية القائمة
  insertLast(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // 📌 إدراج بعد قيمة معينة
  insertAfter(target, value) {
    let current = this.head;
    while (current && current.value !== target) {
      current = current.next;
    }
    if (current) {
      const newNode = new Node(value);
      newNode.next = current.next;
      current.next = newNode;
    }
  }

  // 📌 طباعة القائمة
  printAll() {
    let current = this.head;
    let result = '';
    while (current) {
      result += current.value + ' -> ';
      current = current.next;
    }
    console.log(result + 'null');
  }
}

// 🔹 اختبار الإدراج
const list = new LinkedList();
list.insertFirst(10);
list.insertFirst(20);
list.insertLast(30);
list.insertAfter(10, 25);

console.log('📌 بعد عمليات الإدراج:');
list.printAll();
