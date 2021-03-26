// Part 1, Rectangle
// Given the following a rectangle object like the one below, write the following functions which
//accept a rectangle object as an argument:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle

const rectangleA = {
  length: 4,
  width: 4
};

const rectangleB = {
  length: 4,
  width: 9
}

const isSquare = function(rect){
  if (rect.length === rect.width){
    return "Gosh, you're such a square!";
  } else{
    return "Cool guys like you aren't squares.";
  }
}
const area = function (rect){
  return `The area of the rectangle is ${rect.length  * rect.width}`;
}

const perimeter = function (rect){
  return `The perimeter of the rectangle is ${rect.length*2 + rect.width*2}`;
}

console.log(isSquare(rectangleB));
console.log(area(rectangleA));
console.log(perimeter(rectangleB));

// Given the following a triangle object like the one below, write the following functions which accept a
//triangle object as an argument:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not

const triangleA = { // Equilateral - can't be obtuse, always acute
  sideA: 4,
  sideB: 4,
  sideC: 4
};
const triangleB = { // Isosceles acute
  sideA: 3,
  sideB: 3,
  sideC: 4
};
const triangleC = { // Scalene Obtuse
  sideA: 6,
  sideB: 3,
  sideC: 4
};

const isEquilateral = function(tri){
  if (tri.sideA === tri.sideB && tri.sideB === tri.sideC && tri.sideA === tri.sideC){
    return "I'm an equilateral triangle!"
  } else {
    return "I must be an isosceles  or obtuse triangle... "
  }
}

console.log(isEquilateral(triangleA));

const isIsosceles = function(tri){
  if (tri.sideA === tri.sideB || tri.sideB === tri.sideC || tri.sideA === tri.sideC){
    return "I'm an isosceles triangle!"
  }
}

console.log(isIsosceles(triangleB));

const isObtuse = function(tri){

  const sideA = tri.sideA;
  const sideB = tri.sideB;
  const sideC = tri.sideC;

  const sideASquared = sideA ** 2;
  const sideBSquared = sideB ** 2;
  const sideCSquared = sideC ** 2;

  let longestSide;
  let sumSquares
  if(sideA > sideB && sideA > sideC){
    longestSide = sideA;
    sumSquares = sideBSquared + sideCSquared;
  } else if(sideB > sideA && sideB > sideC){
    longestSide = sideB;
    sumSquares = sideASquared + sideCSquared;
  } else if(sideC > sideA && sideC > sideB){
    longestSide = sideC;
    sumSquares = sideASquared + sideBSquared;
  }

  if(sumSquares < (longestSide*longestSide)){
    return "I'm SO obtuse."
  } else {
    return "I'm not obtuse"
  }
}

console.log(isObtuse(triangleC));

const areaTri = function (tri){

  const sideA = tri.sideA;
  const sideB = tri.sideB;
  const sideC = tri.sideC;

  const s = (sideA + sideB + sideC)/2;
  const insideSqrt = s * (s - sideA) * (s - sideB) * (s - sideC);
  return Math.sqrt(insideSqrt);
}

console.log(`The of the triangle area is ${areaTri(triangleB)}`);

//Write a function called cashRegister that takes a shopping cart object. The object contains
//item names and prices (itemName: itemPrice). The function should return the total price of the
//shopping cart. Example:

const shoppingCart = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const cashRegister = function(){
  const cartArray = Object.values(shoppingCart);        // create an array out of only the values in the object

  let cartTotal = 0;
  for (let i=0; i < cartArray.length; i++){                   // loop through new cart array to sum the items
    cartTotal = cartTotal + parseFloat(cartArray[i]);     // parse float makes the string price a number
  }
  return `The grand total of your shopping cart is $${cartTotal}!`;
}

console.log(cashRegister(shoppingCart));

// You're starting your own credit card business. You've come up with a new way to
//validate credit cards with a simple function called validateCreditCard that returns true or false.
//
// Here are the rules for a valid number:
//
// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16

const validateCreditCard = function (inputCard) {

  const cardNum = inputCard.replaceAll("-",""); // remove all dashes from number.

  let diffNums = false;               // run a for loop to set  variables to test if diff nums and sum of digits further down
  let digitSum = 0;
  for(i=0; i < cardNum.length; i++) {
    digitSum = digitSum + Number(cardNum[i]);
    for (j=1; j < cardNum.length && diffNums === false; j++){
      if (cardNum[i] !== cardNum[j]){   // nested for loop to test  two nums against e/o - if at any point index number j isn't equal to the element before it, then there are different numbers
        diffNums = true;
      }
    }
  }

  if (cardNum.length !== 16 ) {
    return objectMaker(false, inputCard, 'This number doesnt have 16 digits.');
  } else if (!(Number.isInteger(Number(cardNum))) === true) {      // ***changes card no. string to number and tests if the whole thing is an integer / number. if there's a letter, will return false. can't do without the ! in front - why?
    return objectMaker(false, inputCard, 'Invalid Characters');
  } else if ((cardNum[cardNum.length-1]%2) !== 0 ) {               //tests if last number is even
    return objectMaker(false, inputCard, 'Odd final number.')
  } else if (!diffNums) {                                          // uses variables created above. diffNums will now be true or false.
    return objectMaker(false, inputCard, 'There arent any different numbers.')
  } else if (digitSum <= 16) {                                     // uses digitSum created above to complete test
    return objectMaker(false, inputCard, 'The sum of the digits is not greater than 16.')
  } else {
    return objectMaker(true, inputCard);
  }
}

const objectMaker = function (boolean, inputCard, reason) {
  const validator = boolean;
  const cardNum = inputCard;
  const error = reason || '';               // make 3rd argument optional

  const myObject = {
    boolean: validator,
    cardNumber: cardNum,
  }

  if (error.length !== 0) {                // add 3rd key-value if the above variable has more than an empty string in it, meaning an argument was entered
    myObject.reason = error;
  }

  return myObject;
}

console.log(validateCreditCard('a923-3211-9c01-1112')); // invalid characters
console.log(validateCreditCard('4444-4444-4444-4444')); // all same number
console.log(validateCreditCard('1111-1111-1111-1110')); // less than 16
console.log(validateCreditCard('6666-6666-6666-6661')); // odd final number
console.log(validateCreditCard('9999-9999-8888-0000')); // works
