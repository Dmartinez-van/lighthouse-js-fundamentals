const whichSchool  = function (age) {
  return age > 18 ? 'Lighthouse Labs' : (age <= 18 && age >= 13 ? 'Secondary School' : (age < 13 ? 'Elementary School' : 'Undefined'));
}  

console.log(whichSchool(18.1));