class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    // add the val to the end
    this.values.push(val);
    let i = this.values.length - 1;
    // bubble that shit up to its correct position
    let pIdx = Math.floor((i - 1) / 2);
    while (val > this.values[pIdx]) {
      let temp = this.values[pIdx];
      this.values[pIdx] = this.values[i];
      this.values[i] = temp;
      i = pIdx;
      pIdx = Math.floor((i - 1) / 2);
    }
    return this.values;
  }

  extractMax() {
    this.swap(this.values, 0, this.values.length - 1);
    let result = this.values.pop();
    let pIdx = 0,
      left = 2 * pIdx + 1,
      right = 2 * pIdx + 2;
    let value = this.values[pIdx];
    while (value < this.values[left]) {
      if (this.values[left] === undefined) break;
      if (value < this.values[left] && value > this.values[right]) {
        this.swap(this.values, pIdx, left);
        pIdx = left;
      } else if (value > this.values[left] && value < this.values[right]) {
        this.swap(this.values, pIdx, right);
        pIdx = right;
      } else {
        let swapIdx = this.values[left] < this.values[right] ? right : left;
        this.swap(this.values, pIdx, swapIdx);
        pIdx = swapIdx;
      }
      left = 2 * pIdx + 1;
      right = 2 * pIdx + 2;
    }
    return result;
  }

  swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

let heap = new MaxBinaryHeap();
// for (const i of Array(10).keys()) {
//   heap.insert(i);
// }
heap.insert(12);
heap.insert(1);
heap.insert(34);
heap.insert(39);
heap.insert(15);
heap.extractMax();
console.log(heap.values);
