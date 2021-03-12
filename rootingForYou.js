function judgeVegetable(veggies, characteristic) {
  let winner;
  let leadingValue = 0;

  for (let i = 0; i < veggies.length; i++) {
    if(veggies[i][characteristic] >= leadingValue) {  
      if (veggies[i][characteristic] === leadingValue) {
        console.log("There is a tie with multiple contestants with " + leadingValue + " points!!!");
        winner = "A winner has not been decided.";
        break;
      } else {
        leadingValue = veggies[i][characteristic];
        winner = veggies[i].submitter;
      }
    }
  }
  return winner;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 2
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 21,
    plumpness: 1
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 1,
    plumpness: 6
  },
  {
    submitter: 'Doug Reierson',
    redness: 10,
    plumpness: 8
  }
]

const metric = 'redness';

console.log(judgeVegetable(vegetables, metric));