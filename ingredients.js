const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
};
// Write a for loop that prints out the contents of ingredients:
for (item in ingredients) {
  console.log(ingredients[item]);
};
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let j = 0; j < ingredients.length; i++) {
  let reverseList = [];
  reverseList[j] = ingredients.pop(); 
  console.log(reverseList[j]);
};
