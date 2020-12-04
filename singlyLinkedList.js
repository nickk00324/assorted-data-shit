class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) this.head = newNode;
    if (this.tail) this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return oldHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let count = 0;
    let current = this.head;
    while (count < index) {
      current = current.next;
      count++;
    }
    return current;
  }

  set(i, val) {
    let node = this.get(i);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

  insert(i, val) {
    if (i < 0 || i > this.length) return false;
    if (i === 0) return !!this.unshift(val);
    if (i === this.length) return !!this.push(val);

    let node = new Node(val);
    let prevNode = this.get(i - 1);
    node.next = prevNode.next;
    prevNode.next = node;
    this.length++;
    return true;
  }

  remove(i) {
    if (i < 0 || i >= this.length) return null;
    if (i === 0) return this.shift();
    if (i === this.length - 1) return this.pop();

    let prevNode = this.get(i - 1);
    let removed = prevNode.next;
    prevNode.next = removed.next;
    this.length--;
    return removed;
  }

  reverse() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      // gotta start with next bc thats the first thing u lose
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
  }

  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

let list = new SinglyLinkedList();
Array.from({ length: 1 }, (v, i) => i).forEach((e) => list.push(e));
list.reverse();
list.print();
