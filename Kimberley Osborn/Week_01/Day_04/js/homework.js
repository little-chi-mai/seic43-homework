// Geometry Function Lab
// Part 1, Rectangle
// Given the following rectangle object like the one below, write the following functions which accept a rectangle
// object as an argument:
//
// isSquare - Returns whether the rectangle is a square or not

const rectangleA = {
  length: 4,
  width: 4
};

const rectangleB = {
  length: 5,
  width: 4
};

const isSquare = function (square) {
  if (square.length === square.width) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
};
isSquare(rectangleB);

// area - Returns the area of the rectangle
const area = function (rectangle) {
  const calculateArea = rectangle.length * rectangle.width;
  console.log(calculateArea);
  return calculateArea;
};
area(rectangleB);

// perimeter - Returns the perimeter of the rectangle

const perimeter = function (rectangle) {
  const calculatePerimeter = ( rectangle.length * 2 ) + ( rectangle.width * 2 );
  console.log(calculatePerimeter);
  return calculatePerimeter;
}
perimeter(rectangleB);

// Part 2, Triangle
// Given the following a triangle object like the one below, write the following functions which accept a triangle object as an argument:


const triangleA = {
  sideA: 4,
  sideB: 3,
  sideC: 5
};

// isEquilateral - Returns whether the triangle is equilateral or not
// Triangle in which all three sides have the same length

const isEquilateral = function (triangle) {
  if (triangle.sideA === triangle.sideB && triangle.sideB === triangle.sideC && triangle.sideC === triangle.sideA) {
  console.log(true);
  return true;
} else {
  console.log(false);
  return false;
  };
};
isEquilateral(triangleA);

// isIsosceles - Returns whether the triangle is isosceles or not
// Triangle that has two sides of equal length.

const isIsosceles = function (triangle) {
  if (triangle.sideA === triangle.sideB || triangle.sideB == triangle.sideC || triangle.sideC === triangle.sideA) {
  console.log(true);
  return true;
} else {
  console.log(false);
  return false;
  };
};
isIsosceles(triangleA);


// area - Returns the area of the Triangle

const triangleArea = function (triangle) {
  const side = (triangle.sideA + triangle.sideB + triangle.sideC)/2; //add three sides and divide my 2
  const finalArea = Math.sqrt(side*((side-triangle.sideA)*(side-triangle.sideB)*(side-triangle.sideC))) //square root
  console.log(finalArea);
  return finalArea;
}
triangleArea(triangleA);

// isObtuse - Returns whether the triangle is obtuse or not
// A triangle that has an angle greater than 90°
//find angle first?
// const isObtuse = function (triangle) {
//   if (triangle.sideA || triangle.sideB || triangle.sideC)
// }

// The Cash Register
// Write a function called cashRegister that takes a shopping cart object.
// The object contains item names and prices (itemName: itemPrice).
// The function should return the total price of the shopping cart. Example

  const items = {
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
  };

  const cashRegister = function (cart) {
    const items = Object.keys(cart);
    let sum = 0;

    for (let i = 0; i < items.length; i++) {
      const itemName = items[i]; // get the name of the key for the item
      const itemPrice = cart[itemName]; // get the price for the item
      sum = sum + Number.parseFloat(itemPrice); // convert the price to a float and add it to the sum
  };
  return sum;
};
console.log(cashRegister(items));

// Credit Card Validation
// You're starting your own credit card business. You've come up with a new way to validate credit cards
//with a simple function called validateCreditCard that returns true or false.

// Here are the rules for a valid number:
// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16
// The following credit card numbers are valid:
//
// 9999-9999-8888-0000
// 6666-6666-6666-1666
// The following credit card numbers are invalid:
//
// a923-3211-9c01-1112 invalid characters
// 4444-4444-4444-4444 only one type of number
// 1111-1111-1111-1110 sum less than 16
// 6666-6666-6666-6661 odd final number


const validateCreditCard = function (creditCardNumber){

  // The credit card number must be 16 digits in length
  if(creditCardNumber.length !== 16){
    return false;
  }

  // All of the digits must be numbers
  for(let i = 0; i < creditCardNumber.length; i++){
    // store the current digit
    let cardNumber = creditCardNumber[i];

    // turn the digit from a string to an integer
    cardNumber = Number.parseInt(cardNumber);

    // check that the digit is a number
    if(!Number.isInteger(cardNumber)){
      return false;
    }
  }

  // The credit card number must be composed of at least two different digits
  let obj = {};
  for(let i = 0; i < creditCardNumber.length; i++){
    obj[creditCardNumber[i]] = true;
  }
  if(Object.keys(obj).length < 2){
    return false;
  }

  // The final digit of the credit card number must be even
  if(creditCardNumber[creditCardNumber.length - 1] % 2 !== 0){
    return false;
  }

  // The sum of all the digits must be greater than 16
  let sum = 0;
  for(var i = 0; i < creditCardNumber.length; i++){
    sum = sum + Number(creditCardNumber[i]);
  }
  if(sum <= 16){
    return false;
  }

  return true;
};

console.log(validateCreditCard('1248573019583180')); //true
console.log(validateCreditCard('6666666666661666')); //true
console.log(validateCreditCard('a92332119c011112')); //false
console.log(validateCreditCard('4444444444444444')); //false
console.log(validateCreditCard('1211111111111112')); //true
