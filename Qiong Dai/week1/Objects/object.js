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
// s = (a+b+c)/s
// area = sqrt (s * (s-a) * (s-b) * (s-c))
  let area = Math.sqrt(s * (s - obj.sideA) * (s - obj.sideB) * (s - obj.sideC));
  return area;
};




const isOptuse = function (obj) {
  const arr = Object.values(obj); // object values => array
  arr.sort((a, b) => a - b); // receive arr (number low to high)

  // c^2 > a^2 + b^2
  if (arr[2] ** 2 > arr[0] ** 2 + arr[1] ** 2) {
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
  // arr = ["1.25", ".99", "25.01", "0.60", "10.34", "22.36"]
  let totalCost = 0;
  for (let i = 0; i < arr.length; i++) {
    totalCost += Number(arr[i]); // arr(string) => arr(num)  
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



/* 
JavaScript Bank

In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.

Bank
There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

The bank has many accounts. Accounts should be objects that all share a set of common functionality.

Accounts
Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.

There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.

You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.

Tips
Don't overthink this. Shorter code is probably the answer.

Bonus
Ensure that the accounts cannot have negative values.
Write a 'transfer' on the bank that allows you to transfer amounts between two accounts. */



const bank = [];

const accDetail = {
  name: "Nelly",
  saving: 2000,
  debit: 3000,
  totalBalance = this.saving + this.deb
};

const amount = function (obj){

}
