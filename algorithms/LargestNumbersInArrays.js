function largestOfFour(arr) {
  let maxNums = [];
  for (let i = 0; i < arr.length; i++) {
    let max = Math.max(...arr[i]);
    maxNums.push(max);
  }
  return maxNums;
}
largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);
