class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let node = new Node(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    let oldTail = this.tail;
    this.tail = oldTail.prev;
    this.tail.next = null;
    this.length--;
    return oldTail;
  }

  shift() {
    let oldHead = this.head;
    this.head = oldHead.next;
    this.head.prev = null;
    this.length--;
    return oldHead;
  }

  unshift(val) {
    let node = new Node(val);
    this.head.prev = node;
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }

  get(i) {
    if (i < 0 || i >= this.length) return null;
    const middle = Math.floor(this.length / 2);
    if (i <= middle) {
      // start at the beginning
      let current = this.head;
      for (let k = 0; k <= middle; k++) {
        if (k === i) {
          return current;
        }
        current = current.next;
      }
    } else {
      // start at the end
      let current = this.tail;
      for (let k = this.length - 1; k > middle; k--) {
        if (k === i) {
          return current;
        }
        current = current.prev;
      }
    }
    return null;
  }

  set(i, val) {
    let editedNode = this.get(i);
    if (editedNode) {
      editedNode.val = val;
      return true;
    }
    return false;
  }

  insert(i, val) {
    if (i < 0 || i > this.length) return false;
    if (i === 0) return !!this.unshift(val);
    if (i === this.length) return !!this.push(val);

    let oldNode = this.get(i);
    let newNode = new Node(val);
    newNode.prev = oldNode.prev;
    oldNode.prev.next = newNode;
    oldNode.prev = newNode;
    newNode.next = oldNode;
    this.length++;
    return true;
  }

  remove(i) {
    if (i < 0 || i >= this.length) return null;
    if (i === 0) return this.shift();
    if (i === this.length - 1) return this.pop();

    let removedNode = this.get(i);
    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;
    this.length--;
    return removedNode;
  }

  reverse() {
    let current = this.tail;
    let next = null;
    this.tail = this.head;
    this.head = current;
    for (let i = this.length - 1; i >= 0; i--) {
      let prev = current.prev;
      current.prev = next;
      next = current;
      current.next = prev;
      current = prev;
    }
  }

  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      let prev = current.prev ? current.prev.val : null;
      let next = current.next ? current.next.val : null;
      arr.push(`Node ${current.val}, Prev: ${prev}, Next: ${next}`);
      current = current.next;
    }
    console.log(arr, this.length);
  }
}

let list = new DoublyLinkedList();

Array.from({ length: 5 }, (v, i) => i).forEach((e) => list.push(e));
list.reverse();
list.print();
