class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let node = new Node(val);
    if (!this.first) {
      this.last = node;
    }
    node.next = this.first;
    this.first = node;
    return ++this.size;
  }

  pop() {
    if (!this.first) return null;
    let oldFirst = this.first;
    this.first = oldFirst.next;
    this.size--;
    if (!this.size === 0) this.last = null;
    return oldFirst.val;
  }
}
