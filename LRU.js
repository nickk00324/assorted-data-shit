class Node {
  constructor(key, value, next = null, prev = null) {
    this.key = key;
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class LRU {
  constructor(limit = 10) {
    this.head = null;
    this.tail = null;
    this.limit = limit;
    this.size = 0;
    this.cache = {};
  }

  write(key, value) {
    this.ensureLimit();

    if (!this.head) {
      this.head = this.tail = new Node(key, value);
    } else {
      const node = new Node(key, value, this.head);
      this.head.prev = node;
      this.head = node;
    }

    //update cache map
    this.cache[key] = this.head;
    this.size++;
  }

  read(key) {
    if (this.cache[key]) {
      const value = this.cache[key].value;

      this.remove(key);
      this.write(key, value);

      return value;
    }

    console.log("have to fetch that shit hold up");
  }

  ensureLimit() {
    if (this.limit > this.size) {
      this.remove(this.tail.key);
    }
  }

  remove(key) {
    const node = this.cache[key];

    if (node.prev !== null) {
      node.prev.next = node.next;
    } else {
      this.head = node.next;
    }

    if (node.next !== null) {
      node.next.prev = node.prev;
    } else {
      this.tail = node.prev;
    }

    delete this.cache[key];
    this.size--;
  }
}
