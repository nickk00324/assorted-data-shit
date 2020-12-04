const pivot = (arr, start = 0, end = arr.length - 1) => {
  let pivotIndex = start;
  let pivot = arr[start];
  for (let i = start + 1; i < end; i++) {
    if (arr[i] < pivot) {
      pivotIndex++;
      let temp = arr[i];
      arr[i] = arr[pivotIndex];
      arr[pivotIndex] = temp;
    }
  }
  let temp = arr[start];
  arr[start] = arr[pivotIndex];
  arr[pivotIndex] = temp;
  return pivotIndex;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right);
    quickSort(arr, left, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
};

console.log(quickSort([15, 8, 2, 6, 5, 10, 14, 12]));
