/* Challenge
We will be writing a program that prints the numbers from 100 to 200 to the console, with three exceptions:

If the number is a multiple of 3, print the string "Loopy" instead of the number.
If the number is a multiple of 4, print the string "Lighthouse" instead of the number.
If the number is a multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number.
By print, we are referring to console.log.
*/

// declare var(s). Set to upper limit for our challenge.
let highLimit = 200;
let lowLimit = 100; // Add so as to allow for other limits
let phrase = ""; // empty string to be converted as needed

// Loop from 100 to 200 with exceptions on multiples of 3, 4, and (3 && 4)
for (let i = lowLimit; i <= highLimit; i++) {
  if (i % 3 === 0 && i % 4 === 0) {
    phrase = "LoopyLighthouse";
  } else if (i % 4 === 0) {
    phrase = "Lighthouse";
  } else if (i % 3 === 0) {
    phrase = "Loopy";
  } else {
    phrase = i;
  }

  console.log(phrase);
}