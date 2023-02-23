function findLongestWordLength(str) {
  let arr = str.split(" ");
  let maxNum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > maxNum) {
      maxNum = arr[i].length;
    } else {
      continue;
    }
  }
  return maxNum;
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");
