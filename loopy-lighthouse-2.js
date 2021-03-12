/* Challenge
We will be writing a program that prints the numbers from 100 to 200 to the console, with three exceptions:

If the number is a multiple of 3, print the string "Loopy" instead of the number.
If the number is a multiple of 4, print the string "Lighthouse" instead of the number.
If the number is a multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number.
By print, we are referring to console.log.
*/

function loopyLighthouse (range, multiples, words) {
  // declare var(s). Set to upper limit for our challenge.
  let min, max;
  if (range[0] < range[1]) {
    min = range[0];
    max = range[1];
  } else {
    min = range[1];
    max = range[0];
  }

  let phrase = ""; // empty string to be converted as needed

  // Loop from 100 to 200 with exceptions on multiples of 3, 4, and (3 && 4)
  for (let i = min; i <= max; i++) {
    if (i % multiples[0] === 0 && i % multiples[1] === 0) {
      phrase = words.join("");
    } else if (i % multiples[0] === 0) {
      phrase = words[0];
    } else if (i % multiples[1] === 0) {
      phrase = words[1];
    } else {
      phrase = i;
    }
    console.log(phrase);
  }
}   

loopyLighthouse([1, 24], [3, 4], ["Batty", "Beacon"]);

