console.log("hello world");

/* Part 1, Rectangle
Given the following a rectangle object like the one below, write the following functions which accept a rectangle object as an argument:

isSquare - Returns whether the rectangle is a square or not
area - Returns the area of the rectangle
perimeter - Returns the perimeter of the rectangle
const rectangleA = {
  length: 4,
  width: 4
}; */

const rectangleA = {
  length: 4,
  width: 4,
};
const rectangleB = {
  length: 4,
  width: 5,
};

const isSquare = function (obj) {
  if (obj.length === obj.width) {
    return `It is a square`;
  } else {
    return `It is not a square`;
  }
};

const areaSquare = function (obj) {
  return obj.length * obj.width;
};

const perimeter = function (obj) {
  return (obj.length + obj.width) * 2;
};
console.log(isSquare(rectangleA));
console.log(isSquare(rectangleB));
console.log(areaSquare(rectangleA));
console.log(areaSquare(rectangleB));
console.log(perimeter(rectangleA));
console.log(perimeter(rectangleB));

/* Part 2, Triangle
Given the following a triangle object like the one below, write the following functions which accept a triangle object as an argument:

isEquilateral - Returns whether the triangle is equilateral or not
isIsosceles - Returns whether the triangle is isosceles or not
area - Returns the area of the Triangle
isObtuse - Returns whether the triangle is obtuse or not
const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
}; */
const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4,
};
const triangleB = {
  sideA: 3,
  sideB: 4,
  sideC: 5,
};
const isEquilateral = function (obj) {
  if ((obj.sideA === obj.sideB) === obj.sideC) {
    return `The triangle is equilateral`;
  } else {
    return `The triangle is not equilateral`;
  }
};
const isIsosceles = function (obj) {
  if (
    obj.sideA === obj.sideB ||
    obj.sideB === obj.sideC ||
    obj.sideA === obj.sideC
  ) {
    return `The triangle is isosceles`;
  } else {
    return `The triangle is not isosceles`;
  }
};
const areaTriangle = function (obj) {
  const s = (obj.sideA + obj.sideB + obj.sideC) / 2; //half of Perimeter
  let area = Math.sqrt(s * (s - obj.sideA) * (s - obj.sideB) * (s - obj.sideC));
  return area;
};

const isOptuse = function (obj) {
  const arr = Object.values(obj); //object values => array
  arr.sort((a, b) => a - b); //receive arr (number low to high)
  if (Math.pow(arr[2], 2) > Math.pow(arr[0], 2) + Math.pow(arr[1], 2)) {
    return `The triangle is optuse`;
  } else {
    return `The triangle is not optuse`;
  }
};
console.log(isEquilateral(triangleA));
console.log(isEquilateral(triangleB));
console.log(isIsosceles(triangleA));
console.log(isIsosceles(triangleB));
console.log(areaTriangle(triangleA));
console.log(areaTriangle(triangleB));
console.log(isOptuse(triangleA));
console.log(isOptuse(triangleB));

/* Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example

// Input
const cartForParty = {  
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

// Output
cashRegister(cartForParty)); // 60.55 */

const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36",
};

const cashRegister = function (obj) {
  const arr = Object.values(obj); // values in Obj => Arr(String)
  let totalCost = 0;
  for (let i = 0; i < arr.length; i++) {
    totalCost += Number(arr[i]); // arr(str) => arr(num)
  }
  return totalCost;
};
console.log(cashRegister(cartForParty)); //!!!!Works!!!!!

/* Credit Card Validation
You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.

Here are the rules for a valid number:

Number must be 16 digits, all of them must be numbers
You must have at least two different digits represented (all of the digits cannot be the same)
The final digit must be even
The sum of all the digits must be greater than 16
The following credit card numbers are valid:

9999-9999-8888-0000
6666-6666-6666-1666
The following credit card numbers are invalid:

a923-3211-9c01-1112 invalid characters
4444-4444-4444-4444 only one type of number
1111-1111-1111-1110 sum less than 16
6666-6666-6666-6661 odd final number
Example
validateCreditCard('9999-9999-8888-0000'); // Returns: true
Hint: Remove the dashed from the input string before checking if the input credit card number is valid.

Bonus: Return an object indicating whether the credit card is valid, and if not, what the error is

{ valid: true, number: 'a923-3211-9c01-1112' } 
{ valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
Double Bonus: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration. */

const validateCreditCard = function (passWord) {
  let newPassWord = Number(passWord.replace("-", ""));
  if (newPassWord.length === 16 && typeof (newPassWord) === "number") {
    return true;
  } else if ()
};
