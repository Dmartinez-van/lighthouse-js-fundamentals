function smartGarbage(trash, bins) {
  switch (trash) {
    case 'waste':
      bins.waste += 1;
      break;
    case 'recycling':
      bins.recycling += 1;
      break;
    case 'compost':
      bins.compost += 1;
      break;
  }

  return bins;
}

smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });
smartGarbage('waste', { waste: 4, recycling: 2, compost: 5 });
smartGarbage('compost', { waste: 4, recycling: 2, compost: 5 });
smartGarbage('compost', { waste: 4, recycling: 2, compost: 5 });
smartGarbage('compost', { waste: 4, recycling: 2, compost: 5 });
smartGarbage('compost', { waste: 4, recycling: 2, compost: 5 });
