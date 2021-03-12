function range(start,end,step) {
  let rangeArray = [];

  // check parameters for validity
  if (step > 0) {
    if (start < end) {
      if (start !== undefined && end !== undefined && step !== undefined) {
        console.log("I'm here!")
        while (start <= end) {
          rangeArray.push(start);
          //console.log("this while loop is printing: " + rangeArray);
          start += step;
        }
        //rangeArray.push(start);
        //rangeArray.push(start+step);
      }
    }
  }
  return rangeArray;
}
console.log(range(0,10,2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));