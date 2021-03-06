// Takes in array of station names, returns only appropriate names
function chooseStations(stationsCheck) {
  let goodStations = [];

  for (station of stationsCheck) {
    const capacity = station[1];
    
    if (capacity >= 20) {
      const type = station[2];

      if (type === "school" || type === "community centre") {
        console.log(station[0]);
        goodStations.push(station[0]);
      }
    }
  }

/*
    for (let i = 1; i < 3; i++) {
      if (station[i] >= 20) {
        if (station[i+1] = ('resturant' || 'community centre')) {
          goodStations.push(station[i-1])
        }
      } 
    }
  }
*/  
  return goodStations;
}

let stations = [
  ['Big Bear Donair', 10, 'resturant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
  //['Ridgewood', 100, 'school'],
  //['Fake Name Centre', 200, 'community centre']
];

console.log(chooseStations(stations));