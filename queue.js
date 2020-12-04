class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let node = new Node(val);
    if (!this.first) {
      this.first = node;
    }
    if (this.last) this.last.next = node;
    this.last = node;
    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;
    let oldFirst = this.first;
    this.first = oldFirst.next;
    this.size--;
    if (this.size === 0) this.last = null;
    return oldFirst.value;
  }
}

module.exports = Queue;
