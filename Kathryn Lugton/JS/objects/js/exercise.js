// Geometry Function Lab:

// Part 1, Rectangle -
// Given the following a rectangle object like the one below, write the following
//functions which accept a rectangle object as an argument:

const rectangleA = {
    length: 4,
    width: 4,
  };

// isSquare - Returns whether the rectangle is a square or not
const isSquare = function(rectangle) {
    if(rectangle.length === rectangle.width){
      console.log(`This is a square.`);
      return true;
  } else {
    console.log(`This is a rectangle.`);
    return false;
  }
}
isSquare(rectangleA);

// areaRectangle - Returns the area of the rectangle
const areaRectangle = function(rectangle) {
  const theArea = rectangle.length * rectangle.width;
  console.log(`The area of this rectangle is ${ theArea }.`)
  return theArea;
}
areaRectangle(rectangleA);

// perimeter - Returns the perimeter of the rectangle
const perimeter = function(rectangle) {
  const thePerimeter = 2 * (rectangle.length + rectangle.width);
  console.log(`The perimeter of this rectangle is ${ thePerimeter }.`)
  return thePerimeter;
}
perimeter(rectangleA);

// Part 2, Triangle
// Given the following a triangle object like the one below, write the following
//functions which accept a triangle object as an argument:

  const triangleA = {
    sideA: 3,
    sideB: 4,
    sideC: 4
  };

// isEquilateral - Returns whether the triangle is equilateral or not
const isEquilateral = function (triangle) {
  if(triangle.sideA === triangle.sideB && triangle.sideC){
    console.log(`This is an equilateral triangle.`);
    return true;
 } else {
   console.log(`This is not an equilateral triangle.`);
   return false;
 }
}
isEquilateral(triangleA);

// isIsosceles - Returns whether the triangle is isosceles or not
const isIsosceles = function(triangle) {
  const yes = "This is an isosceles triangle.";
  if(triangle.sideA === triangle.sideB) {
    console.log(`${ yes }`);
    return sidesAB = true;
} else if(triangle.sideA === triangle.sideC) {
  console.log(`${ yes }`);
  return sidesAC = true;
} else if(triangle.sideB === triangle.sideC) {
  console.log(`${ yes }`);
  return sidesBC = true;
} else {
  console.log(`This is not an isosceles triangle.`)
}
}
isIsosceles(triangleA);

// area - Returns the area of the Triangle
const areaTriangle = function(triangle) {
  const a = triangle.sideA;
  const b = triangle.sideB;
  const c = triangle.sideC;
  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * (s-a) * (s-b) * (s-c));
  console.log(`The area of this triangle is ${ area }.`)
  return area;
}
areaTriangle(triangleA);

// isObtuse - Returns whether the triangle is obtuse or not
const isObtuse = function(triangle) {
  const a = triangle.sideA;
  const b = triangle.sideB;
  const c = triangle.sideC;
  const longestSide = Math.max(a,b,c);
  const otherSides = Math.pow(a,2) + Math.pow(b,2) + Math.pow(c,2) - Math.pow(longestSide, 2);

 if(Math.pow(longestSide,2) > otherSides){
  console.log(`This is an obtuse triangle.`);
} else {
console.log(`This is an acute triangle.`)
}
}
isObtuse(triangleA);

// The Cash Register -

// Write a function called cashRegister that takes a shopping cart object.
//The object contains item names and prices (itemName: itemPrice).
//The function should return the total price of the shopping cart.

const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};
const sumArray = function (array){
  let sum = 0;
  for(let j = 0; j < array.length; j++){
    sum += array[j];
  }
  return sum;
}
  const cashRegister = function(cart)
  {
    let priceArray = [];
    const priceString = Object.values(cart);

    for(let i = 0; i < priceString.length; i++){
      priceArray.push(parseFloat(priceString[i]));
}
  let total = sumArray(priceArray);
  console.log(`Your cart total: $${ total }`);
}

cashRegister(cartForParty);

// Credit Card Validation

const validateCreditCard = function(cardNumber) {
  let stringCardNo = "";
  for()
  console.log(`${ cardNo }`);


// let clientProfile: {
//   name: "Katie",
//   hasMoney: true,
//   cardNumber: []
};
validateCreditCard("4444.4");

//validateCreditCard('9999-9999-8888-0000'); // Returns: true
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }

// Here are the rules for a valid number:
//
// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16

// The following credit card numbers are valid:
// 9999-9999-8888-0000
// 6666-6666-6666-1666

// The following credit card numbers are invalid:
// 1111-1111-1111-1110 sum less than 16
// 6666-6666-6666-6661 odd final number

// Hint: Remove the dashed from the input string before checking if the input credit card number is valid.
// Bonus: Return an object indicating whether the credit card is valid, and if not, what the error is
