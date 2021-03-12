// Takes in array, returns index of last number occurring, returns -1 if not applicable
function lastIndexOf (list, num) {
  let indexPos; // empty var, to be filled in and replaced with indices of 'num' as needed
  
  for (let i in list) {
    if (list[i] === num) {
      indexPos = i;
    }
  }
  if (indexPos >= 0) {
    return Number(indexPos);
  } else {
    return -1;
  }
}

// Test conditions
console.log(lastIndexOf([ 0, 1, 4, 1, 2, 4, 5, 7, 1 ], 1), "=?", 8);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);