//interpolation 'back tick' ${Jobtitle}


//Lifetime Supply
console.log("Lifetime Supply");
let currentAge = 28;
let maxAge = 100;
let amountDay = 3;

const total = ((maxAge - currentAge) * amountDay * 365);

console.log("You will need " + total + " of supply to last you until the ripe old age of " + maxAge);



//Geometrizer
console.log("\n\nGeometrizer");
const radius = 50;
let diameter = 2 * radius;
let pi = 3.141592;
const circumference = pi * diameter;
const area = pi * radius * radius //Math.pow() or **2

console.log("The circumference is " + circumference);
console.log("The area is " + area);


//Tempt Converter
console.log("\n\nCelsius to Farenheit");
let celsius1 = 27;
let farenheit1 = ((celsius1 / 5 * 9) + 32);
console.log(celsius1 + "\xB0C is " + farenheit1 + "\xB0F");

console.log("\n\nFarenheit to Celsius");
let farenheit2 = 80;
let celsius2 = ((farenheit2 - 32) * 5 / 9);
console.log(farenheit2 + "\xB0F is " + celsius2 + "\xB0C")
