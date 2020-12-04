const merge = (arr1, arr2) => {
  let merged = [];
  let left = 0,
    right = 0;

  while (merged.length < arr1.length + arr2.length) {
    if (arr1[left] < arr2[right]) {
      merged.push(arr1[left]);
      left++;
    } else {
      merged.push(arr2[right]);
      right++;
    }

    if (left === arr1.length) merged = merged.concat(arr2.slice(right));
    if (right === arr2.length) merged = merged.concat(arr1.slice(left));
  }
  return merged;
};

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let middle = Math.floor(arr.length / 2);
  return merge(mergeSort(arr.slice(0, middle)), mergeSort(arr.slice(middle)));
};

console.log(mergeSort([3, 2, 4, 1, 7]));
