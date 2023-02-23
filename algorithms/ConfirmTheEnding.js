// Confirm the Ending

function confirmEnding(str, target) {
  let targetLength = target.length;
  let lastChar = str.slice(-targetLength);
  return target === lastChar;
}
confirmEnding("Bastian", "n");

// another solution =>  using Regular Expression

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  let re = new RegExp(target + "$", "i"); //i => flag
  return re.test(str);
}
console.log(confirmEnding("Bastian", "n"));
