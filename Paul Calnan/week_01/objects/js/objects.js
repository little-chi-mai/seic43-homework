// // # Geometry Function Lab
// //
// // ### Part 1, Rectangle
// //
// // Given the following a `rectangle` object like the one below, write the following functions which accept a `rectangle` object as an argument:
// //
// // * isSquare - Returns whether the rectangle is a square or not
// // * area - Returns the area of the rectangle
// // * perimeter - Returns the perimeter of the rectangle
// //
// // ```javascript
  const rectangleA = {
   length: 4,
    width: 20
  };
//
  const rectangle = function(rect) {
   let isSquare = '';
   let area = 0;
   let perimeter = 0;
   let items = Object.keys(rect);
//
   for (let i = 0; i < rect.length; i++) {
     const area = rect[i];
     console.log(`${rect.length * rect.width}`);
   }
//
   for (let i = 0; i < rect.length; i++) {
     const perimeter = rect[i];
     console.log(`${((rect.length + rect.width) * 2)}`);
   }
//
   for (let i = 0; i < rect.length; i++) {
     const isSquare = rect[i];
     console.log(`${(rect.length === rect.width)}`);
   }
//
   return perimeter;
   return isSquare;
   return area;
  };
//
 console.log(rectangle(rectangleA));
//
//
//
//
// // ```
// //
// // ### Part 2, Triangle
// //
// // Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:
// //
// // * isEquilateral - Returns whether the triangle is equilateral or not
// // * isIsosceles - Returns whether the triangle is isosceles or not
// // * area - Returns the area of the Triangle
// // * isObtuse - Returns whether the triangle is obtuse or not
// //
// // ```javascript
  const triangleA = {
    sideA: 4,
    sideB: 4,
    sideC: 4
  };
//

  const triangle = function(tri) {

    const side = Object.values(tri);

    const s = (side[0] + side[1] + side[2])/2;
    const area = Math.sqrt(s*((s-side[0])*(s-side[1])*(s-side[2])));
    console.log(area);
    if ((side[0] > 0 && side[1] > 0 && side[1] > 0) &&
    (side[0] === side[1] && side[1] === side[2] && side[2] === side[0])) {
      console.log('Equalateral');
    } else {
       if ((side[0] > 0 && side[1] > 0 && side[1] > 0) &&
      (side[0] === side[1] || side[1] === side[2] || side[2] === side[0])) {
        console.log('Isosceles');
    } else {
        console.log('Obtuse');
      }

}
    //console.log(sides[0] === sides[1] === sides[2]); {

      //console.log('Equalateral');

    // } else {
    //   if (side[0] !== side[1] === side[2] || side[1] !== side[2] === side[0] || side[2] !== side[0] === side[1]);
    //   console.log('Obtuse');



  };

console.log(triangle(triangleA));
// ```


// # The Cash Register
//
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.
// Example
//
// ```
// // Input
 const cartForParty = {
   banana: "1.25",
   handkerchief: ".99",
   Tshirt: "25.01",
   apple: "0.60",
   nalgene: "10.34",
   proteinShake: "22.36"
 };

 const cashRegister = function(cart) {

   const valueArray = Object.values(cart);
   let sum = 0

   for(let i = 0; i < valueArray.length; i++) {
     sum += parseFloat(valueArray[i]);
   }
            // KEY ITERATION VERSION
            // let sum = 0;  // initialize sum
            // let items = Object.keys(cart); //grab the keys handed to (cart)
            // for (let i = 0; i < items.length; i++) {
            //     itemName = items[i];            //drilling
            //     itemPrice = cart[itemName];     //down
            //sum = sum + parseFloat(cart.i);
            // sum = sum + Number.parseFloat(itemPrice); // converts price string to FLOAT and totals
            // //sum.toFixed(2); // Doesn't work on a NUMBER, how to keep to 2 decimals with float?
            //}
   return sum;
 };

 console.log(cashRegister(cartForParty)); // 60.55
// ```
// # Credit Card Validation
//
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
const  validateCreditCard = function (creditCardNumber) {
  // - Number must be 16 digits, all of them must be numbers
  if(creditCardNumber.length !== 16) {
    return false;
  }
  for(let i = 0; i < creditCardNumber.length; i++){
    // store the current digit
    let currentNumber = creditCardNumber[i];
    currentNumber = Number.parseInt(currentNumber);
    // - Number must be 16 digits, all of them must be numbers
    //if(!Number.isInteger(currentNumber)){
      //return false;
    if(Number.isInteger(currentNumber)) {
      return true;
    } else {
      return false;
    }
  }
  // - You must have at least two different digits represented (all of the digits cannot be the same)
  let card = {};
  for(var i = 0; i < creditCardNumber.length; i++){
    card [ creditCardNumber[i] ] = true;
  }
  if(Object.keys(card).length < 2){
    return false;
  }
  // - The final digit must be even
  if(creditCardNumber[ creditCardNumber.length - 1 ] % 2 !== 0){
    return false;
  }
  // - The sum of all the digits must be greater than 16
  let sum = 0;
  for(var i = 0; i < creditCardNumber.length; i++){
   sum += Number(creditCardNumber[i]);
  }
  if(sum <= 16){
   return false;
  }

  return true;
};
// The following credit card numbers are valid:
//
// - `9999-9999-8888-0000`
// - `6666-6666-6666-1666`
//
// The following credit card numbers are invalid:
//
// - `a923-3211-9c01-1112` invalid characters
// - `4444-4444-4444-4444` only one type of number
// - `1111-1111-1111-1110` sum less than 16
// - `6666-6666-6666-6661` odd final number
// ## Example
// ```
console.log(validateCreditCard('9999999988880000')); // Returns: true
// ```
//
// *Hint*: Remove the dashed from the input string before checking if the input credit card number is valid.
//
// *Bonus*: Return an object indicating whether the credit card is valid, and if not, what the error is
//
// ```
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
