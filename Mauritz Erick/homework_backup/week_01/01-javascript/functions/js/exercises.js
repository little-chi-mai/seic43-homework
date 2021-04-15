//interpolation 'back tick' ${Jobtitle}


//Fortune teller
function fortuneTeller(numKids, partner, geo, jobTitle){
  console.log("\n\nYou will be a " + jobTitle + " in " + geo + " ,and married to " + partner + " with " + numKids + " kids.");

}

fortuneTeller(5, "Joe", "Italy", "Carpenter");
fortuneTeller(3, "Bidden", "Rome", "Programmer");
fortuneTeller(2, "Ray", "Japan", "Ninja");
fortuneTeller(1, "Kroc", "China", "Finance dealer");


//Puppy Age Calculator
//ES6 : Default Parameters: variadic

function calculateDogAge(Age, conversionRate=7){

  const puppyAge = (Age * conversionRate);

  console.log("\n\nYour doggie is " + puppyAge + " years old in dog years!");
  //console.log("\n\nYour puppy equal to " + humanAge + " years old in human race!");
}

calculateDogAge(2); //arity:1
calculateDogAge(3, 8); //arity:2
calculateDogAge(4, 9);




//Lifetime Supply

function calculateSupply(age, amountDay){
  const maxAge = 100;
  const requiredAge = maxAge - age;
  const total = requiredAge * amountDay * 365
  constotal =
  console.log("\n\nYou will need " + Math.ceil(total) + " to last you until the ripe old age of " + maxAge);
}

calculateSupply(99, 3.8);
calculateSupply(98, 3);
calculateSupply(97, 3);
calculateSupply(96, 3);
//rounding up: Math.ceil


//Geometrizer



function calcCircumference(radius){
  let diameter = 2*radius;
  let pi = 3.14;
  const circumference = pi * diameter;
  console.log("The circumference is " +  circumference);
}

calcCircumference(2);
calcCircumference(4);


function calcArea(radius){
  let pi = 3.14;
  const area = pi * radius * radius;
  console.log("The area is " + area);
}

calcArea(2);
calcArea(4);


//Tempt Converter

function celsiusToFahrenheit(cel){
  let far=((cel / 5 * 9) + 32);
  console.log(cel + " °C is " + far +" °F\n");
}

celsiusToFahrenheit(17);
celsiusToFahrenheit(18);

function fahrenheitToCelsius(far){
  let cel = ((far - 32) * 5 / 9);
  console.log(far + " °F is " + cel + " °C\n")
}

fahrenheitToCelsius(62.59);
fahrenheitToCelsius(64.4);
