/*Part 1, Rectangle
Given the following a rectangle object like the one below, write the following functions which accept a rectangle object as an argument:

* isSquare - Returns whether the rectangle is a square or not
* area - Returns the area of the rectangle
* perimeter - Returns the perimeter of the rectangle
*/

const rectangle1 = {
  length: 8,
  width: 5
};
const rectangle2 = {
  length: 5,
  width: 5
};


const checkRectangle = function (rectangle) {
  const rectLength = rectangle.length;
  const rectWidth = rectangle.width;
  const area = rectLength * rectWidth;
  const perimeter = ( 2 * (rectLength + rectWidth))

  console.log (`The area is ${area}`);
  console.log (`The perimeter is ${perimeter}`);

  if (rectWidth === rectLength ) {
    console.log('This is not rectangle');
  }
else {
  console.log('This is arectangle');
}
}
checkRectangle(rectangle2);

//Part 2, Triangle
/*Given the following a triangle object like the one below, write the following functions which accept a triangle object as an argument:

isEquilateral - Returns whether the triangle is equilateral or not
isIsosceles - Returns whether the triangle is isosceles or not
area - Returns the area of the Triangle
isObtuse - Returns whether the triangle is obtuse or not */
const triangle1 = {
  sideA: 6,
  sideB: 6,
  sideC: 6,
  angleA: 60,
  angleB: 60,
  angleC: 60
};

const triangle2 = {
  sideA: 10,
  sideB:  10,
  sideC: 5,
  angleA: 70,
  angleB: 60,
  angleC: 50
};
const triangle3 = {
  sideA: 6,
  sideB:  8,
  sideC: 5,
  angleA: 40,
  angleB: 50,
  angleC: 100
};

const checkTriangle = function (triangle) {
  //const triangleValues = {
     side1 = triangle.sideA;
     side2 = triangle.sideB;
     side3 = triangle.sideC;
    const angle1 = triangle.angleA;
    const angle2 = triangle.angleB;
    const angle3 = triangle.angleC;
    const s = (side1 + side2 + side3) / 2;
    const area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));

  //}
  if ( (side1 === side2) && (side2 === side3) && (side3 === side1)){
    console.log('Triangle is Equilateral ')
  }
  else {
    console.log('Triangle is not Equilateral ')
  }

  if (side1 === side2 || side2 === side3 || side3 === side1){
    console.log('Triangle is isIsosceles ')
  }
  else {
    console.log('Triangle is not Isosceles ')
  };
  if (angle1 > 90 || angle2 > 90 || angle3> 90){
    console.log ('The triangle is Obtuse');
  }
  else {
    console.log ('The triangle is not Obtuse');
  };

    console.log (`The area of triangle if ${ s }`)

}
checkTriangle(triangle1);

/*The Cash Register
Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example

*/
const shoppingCart = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
}

const cashRegister = function (cart) {
  itemlist = Object.keys(shoppingCart);
  let totalAmount = 0;
    for (let i = 0; i < itemlist.length; i++) {

      totalAmount = totalAmount + parseFloat(cart[itemlist[i]]);
    }
    console.log('Total Price is cs' + totalAmount);
    return totalAmount;

};
cashRegister(shoppingCart);

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
6666-6666-6666-6661 odd final number*/
const creditCardDetails1 =  9999999988880000;
//const creditCardDetails2 =  a92332119c011112;
const creditCardDetails3 =  4444444444444444;
const creditCardDetails4 =  1111111111111110;
const creditCardDetails5 =  6666666666666661;
const creditCardDetails6 =  6666666666661666;

const validateCreditCard = function (creditCard) {
  let isValid = true;
  let char = (creditCard + '').split('');

  //console.log(char);

  let totalSum = 0;
  //console.log (num);

// Number must be 16 digits
  if (char.length !== 16 ) {
    console.log( 'Card invalid ');
    return false;
  };
//The final digit must be even
  let lastIndex = char.length - 1;

  if ( parseInt(char[lastIndex]) % 2 !== 0){
    console.log( 'Card invalid ');
    return false;
  }

  let firstNumberCount = 0;

  for (let i = 0; i < char.length; i++){
    
//The sum of all the digits must be greater than 16
    totalSum = totalSum + parseInt(char[i]);

  //  all of them must be numbers

    if ( !(parseInt(char[i]) >= 0 && parseInt(char[i]) <= 9)){
      console.log( 'Card invalid ');
      return false;

    }

    //console.log("char[0]=="+char[0] + " equals " + "char["+ i + "]==" + char[i]);
    //You must have at least two different digits represented (all of the digits cannot be the same)
    if(parseInt(char[0]) === parseInt(char[i])){
      firstNumberCount++;
    }
  }

  if(firstNumberCount === 16){
    console.log( 'Card invalid ');
    return false;
  }

  if(totalSum <= 16){
    console.log( 'Card invalid ');
    return false;
  }

  return isValid;
}

validateCreditCard(creditCardDetails3)
