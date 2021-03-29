//Given the following a rectangle object like the one below, write the following functions which accept a rectangle object as an argument:

//isSquare - Returns whether the rectangle is a square or not
//area - Returns the area of the rectangle
//perimeter - Returns the perimeter of the rectangle

const rectangleA = {
  length: 4,
  width: 5
};

const isSquare = function (object) {

  let square = true;
  if (object.length !== object.width) {
    square = false;
    }
  return square;
}

//console.log(isSquare(rectangleA));

const area = function (object) {
  const area = object.length * object.width;
  return area;
}

//console.log(area(rectangleA));

const perimeter = function (object) {
  const perimeter = (object.length * 2) + (object.width * 2);
  return perimeter;
}

//console.log(perimeter(rectangleA));

//Given the following a triangle object like the one below, write the following functions which accept a triangle object as an argument:

//isEquilateral - Returns whether the triangle is equilateral or not
//isIsosceles - Returns whether the triangle is isosceles or not
//area - Returns the area of the Triangle
//isObtuse - Returns whether the triangle is obtuse or not

const triangleA = {
  sideA: 19,
  sideB: 10,
  sideC: 10
};

const isEquilateral = function (object) {
  let equilateral = false;
  if ((object.sideA === object.sideB) && (object.sideA === object.sideC)) {
    equilateral = true;
  }
  return equilateral;
}

//console.log(isEquilateral(triangleA));

const isIsosceles = function (object) {
  let isosceles = false;
  if ((object.sideA === object.sideB && object.sideC !== object.sideA) || (object.sideB === object.sideC && object.sideA !== object.sideC)) {
    isosceles = true;
  }
  return isosceles;
}

//console.log(isIsosceles(triangleA));

const triangleArea = function (object) {
  let s = 0.5 * (object.sideA + object.sideB + object.sideC);
  let area = (s * ((s - object.sideA) * (s - object.sideB) * (s - object.sideC))) ** 0.5;
  return area;
}
//console.log(triangleArea(triangleA));

const isObtuse = function (object) {
  //the square of the longest side of an obtuse triangle will always be greater than the sum of the squares of the other sides.
  let obtuse = false;
  if ((object.sideA ** 2) > ((object.sideB ** 2) + (object.sideC ** 2))) {
    obtuse = true;
  }
  if ((object.sideB ** 2) > ((object.sideA ** 2) + (object.sideC ** 2))) {
    obtuse = true;
  }
  if ((object.sideC ** 2) > ((object.sideA ** 2) + (object.sideB ** 2))) {
    obtuse = true;
  }
  return obtuse;
  }

console.log(isObtuse(triangleA));

//Write a function called cashRegister that takes a shopping cart object.
//The object contains item names and prices (itemName: itemPrice).
//The function should return the total price of the shopping cart. Example

const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const cashRegister = function (cart) {
  //calculate the number of items
  const numberOfItems = Object.keys(cartForParty).length;
  let total = null;
  //converts object values to an array
  const array = Object.values(cart);

  //calculate the total with a for loop
  for (let i = 0; i < numberOfItems; i++) {
    let itemCost = parseFloat(array[i]) //converts string input to int;
    total = total + itemCost;
  }
  return total;
}
//console.log(cashRegister(cartForParty));

//Number must be 16 digits, all of them must be numbers
//You must have at least two different digits represented (all of the digits cannot be the same)
//The final digit must be even
//The sum of all the digits must be greater than 16

let sampleCard = "0897-1784-0000-0021";
sampleCard = sampleCard.replaceAll("-", "");;

const validateCreditCard = function (number) {
  let cardNumber = number.replaceAll("-", ""); //removes the "-".

  let valid = false;

  let errorType = null;
  //test for only valid characters
  let validCharactersOnly = true;
  for (i = 0; i < number.length; i++) {
    if (number[i] * 1 != number[i]) {
      validCharactersOnly = false;
    }
  }
    if (validCharactersOnly === false) {
      errorType = "Invalid Characters"
    }


  //test if length is valid.
  let validLength = false;
  if (number.length === 16) {
    validLength = true;
  } else {
    errorType = "Invalid Length";
  }

  //test whether there is at least two digits represented.
  let numberOfDifferentDigits = 1;
  let validDigits = false;
  const firstDigit = number[0];

  for (let i = 0; i < number.length; i++) {
    if (number[i] !== firstDigit) {
      validDigits = true;
      break;
    }
    if (validDigits === false) {
      errorType === "Only one digit present";
    }
  }
  //test whether the last digit is even
  let validLastDigit = false;
  if (number[number.length-1] % 2 === 0) {
    validLastDigit = true;
  } else {
    errorType = "Last digit not even number";
  }
  //test if the sum of digits is greater than 16.
  let sum = 0;
  validSum = false;
  for (j = 0; sum <= 17; j++) {
    sum = sum + number[j];
  }
  if (sum > 16) {
    validSum = true;
  } else {
    errorType = "Sum of digits not greater than 16";
  }
  //master test for validity. This ensures that all the tests are true simultaneously.
  if (validCharactersOnly === true && validLength === true && validDigits === true && validLastDigit === true && validSum === true) {
    valid = true;
  }
  //adds the "-" back for the bonus questions output
  const first4 = number[0] + number[1] + number[2] + number[3];
  const second4 = number[4] + number[5] + number[6] + number[7];
  const third4 = number[8] + number[8] + number[10] + number[11];
  const fourth4 = number[12] + number[13] + number[14] + number[15];

  const withDashes = `${first4}-${second4}-${third4}-${fourth4}`;

  const readBack = {
    valid: `${valid}`,
    number: `${withDashes}`,
  }

  const readBack2 = {
    valid: `${valid}`,
    number: `${withDashes}`,
    errorType: `${errorType}`
  }

  if (valid === true) {
    console.log(readBack);
  } else {
    console.log(readBack2);
  }

  return valid;
}
//validateCreditCard(sampleCard);
