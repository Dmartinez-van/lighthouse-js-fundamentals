function merge(arrayOne, arrayTwo) {
  let newArray = [];
  
  // We are given sorted arrays. Therefore we can compare array elements first to determine which should be added into our new array first.
  if (arrayOne[0] < arrayTwo[0]) {
    for (items in arrayOne) {
      newArray.push(arrayOne[items]);
    }
    for (items in arrayTwo) {
      newArray.push(arrayTwo[items]);
    }
  } else {
    for (items in arrayTwo) {
      newArray.push(arrayTwo[items]);
    }
    for (items in arrayOne) {
      newArray.push(arrayOne[items]);
    }
  }

  // Bubble sort (had to googled it, was missing the j = i+1 bit) to compare all values and sort in ascending order. 
  for (let i = 0; i < newArray.length; i++) {
    for (let j = i + 1; j < newArray.length; j++) {
      let temp;
      //console.log("loop# " + i + ". Pass#: " + j)
      if (newArray[i] > newArray[j]) {
        temp = newArray[i];
        newArray[i] = newArray[j];
        newArray[j] = temp;
        }
    }
  }
  return newArray;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
console.log(merge([ 1, 2, 6 ], [1, 2, 7]), "=?", [ 1, 1, 2, 2, 6, 7 ]);
console.log(merge([ 1, 2, 6, 8, 9, 20 ], [1, 2, 4, 7, 20 ]), "=?", [ 1, 1, 2, 2, 4, 6, 7, 8, 9, 20, 20 ]);