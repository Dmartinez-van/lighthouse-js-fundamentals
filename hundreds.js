function howManyHundreds(num) {
  let howMany;
  if (num % 100 === 0) {
    howMany = (num / 100);
  } else {
    howMany = (num / 100);
    howMany = Math.floor(howMany);
  }
  return howMany;
}

console.log(howManyHundreds(799));

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);