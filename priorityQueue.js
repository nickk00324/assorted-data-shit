class Node {
  constructor(val, priority) {
    this.value = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    // add the val to the end
    const node = new Node(val, priority);
    this.values.push(node);
    let i = this.values.length - 1;
    let pIdx = Math.floor((i - 1) / 2);
    while (pIdx >= 0 && node.priority < this.values[pIdx].priority) {
      let temp = this.values[pIdx];
      this.values[pIdx] = this.values[i];
      this.values[i] = temp;
      i = pIdx;
      pIdx = Math.floor((i - 1) / 2);
    }
    return this.values;
  }

  dequeue() {
    this.swap(this.values, 0, this.values.length - 1);
    let result = this.values.pop();
    let pIdx = 0,
      left = 2 * pIdx + 1,
      right = 2 * pIdx + 2;
    if (this.values[left] === undefined) return result;
    let currentPriority = this.values[pIdx].priority;
    while (currentPriority > this.values[left].priority) {
      if (
        currentPriority > this.values[left].priority &&
        currentPriority < this.values[right].priority
      ) {
        this.swap(this.values, pIdx, left);
        pIdx = left;
      } else if (
        currentPriority < this.values[left].priority &&
        currentPriority > this.values[right].priority
      ) {
        this.swap(this.values, pIdx, right);
        pIdx = right;
      } else {
        let swapIdx =
          this.values[left].priority > this.values[right].priority
            ? right
            : left;
        this.swap(this.values, pIdx, swapIdx);
        pIdx = swapIdx;
      }
      left = 2 * pIdx + 1;
      right = 2 * pIdx + 2;
      if (this.values[left] === undefined) break;
    }
    return result;
  }

  swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

let pq = new PriorityQueue();
// for (const i of Array(10).keys()) {
//   heap.insert(i);
// }
pq.enqueue(12, 1);
pq.enqueue(1, 100);
pq.enqueue(34, 23);
pq.enqueue(39, 32);
pq.enqueue(15, 84);

console.log(pq.values);
pq.dequeue();

console.log(pq.values);
