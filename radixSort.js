const getDigit = (num, pos) => {
  return Math.floor(Math.abs(num) / Math.pow(10, pos)) % 10;
};

const digitCount = (num) => {
  return String(num).length;
};

const maxDigits = (arr) => {
  return arr.reduce(
    (max, el) => (digitCount(el) > max ? digitCount(el) : max),
    0
  );
};

const radixSort = (arr) => {
  const times = maxDigits(arr);
  for (let i = 0; i < times; i++) {
    const buckets = Array.from({ length: 10 }, () => []);
    for (let k = 0; k < arr.length; k++) {
      buckets[getDigit(arr[k], i)].push(arr[k]);
    }
    arr = [].concat(...buckets);
  }
  return arr;
};

console.log(getDigit(5345, 0));

console.log(digitCount(2000));

console.log(maxDigits([1, 20, 300, 400, 50000000]));

console.log(radixSort([12, 405, 2, 344, 1409, 299, 65, 3002, 1349]));
