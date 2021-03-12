function concat(arrayOne, arrayTwo) {
  let newArray = [];
  
  for (items in arrayOne) {
    newArray.push(arrayOne[items]);
  }

  for (items in arrayTwo) {
    newArray.push(arrayTwo[items]);
  }

  return newArray;
}

// Tests:
console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);