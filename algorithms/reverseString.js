function reverseString(str) {
  let strRev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    var j = 0;
    strRev += str[i];
  }
  return strRev;
}
reverseString("hello");
