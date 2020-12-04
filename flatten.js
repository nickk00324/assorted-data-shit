const flatten = (arr) => {
  return String(arr)
    .split(",")
    .map((i) => Number(i));
};

console.log(flatten([1, [[[2]]], [3, [4, [[5]]], 6], 7, [[[8, [9]]]]]));
