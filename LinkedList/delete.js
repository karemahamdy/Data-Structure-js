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

  // 📌 حذف أول عنصر
  deleteFirst() {
    if (!this.head) return;
    this.head = this.head.next;
  }

  // 📌 حذف آخر عنصر
  deleteLast() {
    if (!this.head) return;
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
  }

  // 📌 حذف قيمة معينة
  deleteValue(value) {
    if (!this.head) return;
    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
    }
  }

  // 📌 حذف جميع العناصر
  deleteAll() {
    this.head = null;
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

// 🔹 اختبار الحذف
const list = new LinkedList();
list.insertFirst(10);
list.insertFirst(20);
list.insertLast(30);
list.insertAfter(10, 25);

console.log('📌 بعد عمليات الإدراج:');
list.printAll();

list.deleteFirst();
console.log('📌 بعد حذف أول عنصر:');
list.printAll();

list.deleteLast();
console.log('📌 بعد حذف آخر عنصر:');
list.printAll();

list.deleteValue(25);
console.log('📌 بعد حذف القيمة 25:');
list.printAll();

list.deleteAll();
console.log('📌 بعد حذف جميع العناصر:');
list.printAll();
