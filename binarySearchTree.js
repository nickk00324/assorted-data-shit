const Queue = require("./queue");

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);
    if (!this.root) {
      this.root = node;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (!current.left) {
            current.left = node;
            return this;
          }
          current = current.left;
        } else if (value > current.value) {
          if (!current.right) {
            current.right = node;
            return this;
          }
          current = current.right;
        }
      }
    }
    return this;
  }

  find(value, node = this.root) {
    if (!node) return false;
    if (node.value === value) return true;
    if (value > node.value) {
      return this.find(value, node.right);
    } else if (value < node.value) {
      return this.find(value, node.left);
    }
  }

  bfs() {
    let visited = [];
    let q = new Queue();
    let current = this.root;
    q.enqueue(current);
    while (q.size !== 0) {
      current = q.dequeue();
      visited.push(current.value);
      if (current.left) q.enqueue(current.left);
      if (current.right) q.enqueue(current.right);
    }
    return visited;
  }

  dfsPre(node = this.root) {
    if (!node) return [];
    let visited = [node.value];
    return visited
      .concat(this.dfsPre(node.left))
      .concat(this.dfsPre(node.right));
  }

  dfsPost(node = this.root) {
    if (!node) return [];
    let visited = []
      .concat(this.dfsPost(node.left))
      .concat(this.dfsPost(node.right));
    return visited.concat(node.value);
  }

  dfsInOrder(node = this.root) {
    if (!node) return [];
    let visited = [].concat(this.dfsInOrder(node.left)).concat(node.value);
    return visited.concat(this.dfsInOrder(node.right));
  }
}

const tree = new BST();
tree.insert(10);
tree.insert(1);
tree.insert(5);
tree.insert(34);
console.log(tree.dfsInOrder());
