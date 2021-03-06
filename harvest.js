const instructions = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];

function finalPosition(moves) {
  let position = [0,0]; // format x,y (east/west,north/south)

  for (let move in moves) {
    switch (moves[move]) {
      case (moves[move] = 'north'):
        position[1] += 1;
        break;
      case (moves[move] = 'south'):
        position[1] -= 1;
        break;
      case (moves[move] = 'east'):
        position[0] += 1;
        break;
      case (moves[move] = 'west'):
        position[0] -= 1;
        break;
      default:
        console.log(moves[move]);
        console.log('it\'s not working');
        break;
    }
  }
  return position;
}

console.log(finalPosition(instructions));