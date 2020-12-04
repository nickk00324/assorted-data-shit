const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
};

// console.log(linearSearch([1, 2, 3, 4, 5], 8));

const binarySearch = (arr, val) => {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor(arr.length / 2);

  while (left < right) {
    const middleVal = arr[middle];
    if (middleVal === val) return middle;
    if (arr[left] === val) return left;
    if (arr[right] === val) return right;
    if (middleVal < val) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
    middle = Math.floor((right - left) / 2) + left;
  }
  return -1;
};
// console.log(binarySearch([1, 2, 3, 4, 5], 2));

const stringSearch = (str, target) => {
  let count = 0;
  const firstLetter = target[0];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === firstLetter) {
      if (str.slice(i, target.length + i) === target) {
        count++;
      }
    }
  }
  return count;
};

console.log(stringSearch("w", "wa"));
