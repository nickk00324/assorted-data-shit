const factorial = (num) => {
  if (num <= 1) return 1;
  return num * factorial(num - 1);
};

const power = (base, ex) => {
  if (ex === 0) return 1;
  return base * power(base, ex - 1);
};

const productOfArray = (arr) => {
  if (arr.length === 1) return arr[0];
  return arr[0] * productOfArray(arr.slice(1));
};

const recursiveRange = (num) => {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
};

const fib = (num) => {
  if (num === 0) return 0;
  if (num === 1) return 1;
  if (num === 2) return 1;
  return fib(num - 1) + fib(num - 2);
};

const reverse = (str) => {
  if (str.length === 1) return str[0];
  return reverse(str.slice(1)) + str[0];
};

const isPalindrome = (str) => {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
};

const someRecursive = (arr, cb) => {
  if (arr.length === 0) return false;
  return cb(arr[0]) || someRecursive(arr.slice(1), cb);
};

const flatten = (arr) => {
  let newArr = [];
  if (arr.length === 0) return [];
  if (!Array.isArray(arr[0])) {
    newArr.push(arr[0]);
  } else {
    return flatten(arr[0]).concat(flatten(arr.slice(1)));
  }
  return newArr.concat(flatten(arr.slice(1)));
};

// console.log(flatten([1, [2, 3, [4, [[5, [[[6]]]]]]]]));

const oldFlatten = (arr) => {
  let newArr = [];
  const flattenHelper = (inputArr) => {
    if (inputArr.length === 0) {
      //if arr is empty ur done
      return;
    }
    if (typeof inputArr[0] === "number") {
      //if its a number and not an array, push it
      newArr.push(inputArr[0]);
      flattenHelper(inputArr.slice(1));
    } else {
      //if its an array, take the array and do it again
      flattenHelper(inputArr[0]);
      flattenHelper(inputArr.slice(1));
    }
  };
  flattenHelper(arr);
  return newArr;
};

// console.log(flatten([1, [[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));
// console.log(flatten([[1], 2, 3, [4, 5]]));

const capitalizeFirst = (arr) => {
  if (arr.length === 1) return [arr[0][0].toUpperCase() + arr[0].slice(1)];
  return capitalizeFirst([arr[0]]).concat(capitalizeFirst(arr.slice(1)));
};

// console.log(capitalizeFirst(["car", "taco", "banana"]));

const nestedEvenSum = (obj) => {
  // probably flatten first into an array
  // and then do the sum
};
