/*Remove all falsy values from an array. Return a new array; do not mutate the original array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
*/

function bouncer(arr) {
  let filtered = [];
  for (let i = 0; i < arr.length; i++) {
    if (!!arr[i] === true) filtered.push(arr[i]);
  }
  return filtered;
}

bouncer([false, null, 5, NaN, undefined, ""]);
