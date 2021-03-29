// # Credit Card Validation
//
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
//
// Here are the rules for a valid number:
//
// - Number must be 16 digits, all of them must be numbers
// - You must have at least two different digits represented (all of the digits cannot be the same)
// - The final digit must be even
// - The sum of all the digits must be greater than 16
//
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
//
// ## Example
// ```
// validateCreditCard('9999-9999-8888-0000'); // Returns: true
// ```
//
// *Hint*: Remove the dashed from the input string before checking if the input credit card number is valid.



const validateCreditCard = function(cardNumber){

  let cardNumObj = {
    valid: false,
    number: cardNumber,
  }

  let isValid = false; //this variable will store info on whether the card number is valid throughout the if statements

// transform cardNumber into purely numbers without dashes
  for(let i = 0; i < 3; i++){
    cardNumber = cardNumber.replace('-','');
  }

  // console.log("1: " + cardNumber); //DELETE WHEN COMPLETE
// cardNum is a string

  let numbers = "0123456789";

// using the string "numbers", check if each number on the card numbers string is a number
  for(let i = 0; i < cardNumber.length; i++){
    // console.log(cardNumber[i]); //DELETE WHEN COMPLETE
    if(numbers.includes(cardNumber[i]) == false){
      isValid = false;
      // console.log(isValid); //DELETE WHEN COMPLETE
      cardNumObj.valid = isValid;
      cardNumObj.error = 'non-number character detected'
      return cardNumObj;
    }else{
      isValid = true;
      // console.log(isValid); //DELETE WHEN COMPLETE
    }

  }

  // console.log("2: " + isValid); //DELETE WHEN COMPLETE


//check that the cardNumber has at least 2 different digits
//if the first number and every number after that is equal to each other this loop should end with isValid = false, showing all numbers are the statements
//as soon as his loop finds another number not equal to the first number is assigns true to isValid and breaks out of the loop
  for(let i = 1; i < cardNumber.length; i++) {
    if(cardNumber[0] != cardNumber[i]){
      isValid = true;
      break;
    }else {
      isValid = false;
    }

  }

// After the above if statement is ran, and it reveals that all numbers are the same, this if statement will end the function and return isValid as false
  if(isValid === false){
    cardNumObj.valid = isValid;
    cardNumObj.error = 'numbers are all similar, needs at least 2 different numbers'
    return cardNumObj;
  }

  // console.log("3: " + isValid); // DELETE WHEN COMPLETE

  //check to make sure the final digit is even
  if(cardNumber[cardNumber.length - 1] % 2 == 0){
    isValid = true;
  } else {
    isValid = false;
  }

  if(isValid === false){
    cardNumObj.valid = isValid;
    cardNumObj.error = 'last number is not even'
    return cardNumObj;
  }

  // console.log("4: " + isValid); //TO BE DELETED WHEN COMPLETE

  //check that the sum of all the digit is greater than 16
  let sum = 0;
  for(let i = 0; i < cardNumber.length; i++){
    sum += parseInt(cardNumber[i]);
    if(sum > 16){
      isValid = true;
      break; //if the sum is already greater than 16 break out of the loop
    } else{
      isValid = false; //if the sum is not yet >16 then isValid remains false
    }

  }

  if(isValid === false){
    cardNumObj.valid = isValid;
    cardNumObj.error = 'last number is not even'
    return cardNumObj;
  }else{
    cardNumObj.valid = isValid;
    return cardNumObj;
  }



}


// *Bonus*: Return an object indicating whether the credit card is valid, and if not, what the error is
//
// ```
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// ```
//
// *Double Bonus*: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.
// Luhn Algorith:
// label the indexes of each number on the cardNum
// starting from the last index working your way towards the 1st index (i.e. index = 0), add  up all the odd-indexed numbers
// with the remaining even-indexed numbers, multiple each by 2, if it returns a double digit number, add the two digits to get the result, all all results together

//NEEDS DEBUGGING

const checkLuhn = function(cardNum){
  let sumOdd = 0; // to track the addition of odd-indexed numbers
  let sumEven = 0; // keeps track of the addition of final even-indexed numbers
  let even2Digit = ""; //stores the current even-indexed number multiplied by 2 (when they have 2 digits)
  let even2DigitResult = 0; // will be used to add the 2 digits of the even-indexed string with double digits
  let stringOfNum = cardNum.toString(); //changes the card number to be validated into string

// start by going backward down the card numbers and seperate even-indexed numbers from odd-indexed numbers
  for(let i = stringOfNum.length - 1; i >= 0; i--){

    if(i % 2 != 0){ //stores odd-indexed numbers

      sumOdd += parseInt(stringOfNum[i]); //sum the num values of these odd-indexed numbers

    } else{ //for even-indexed numbers

      // if multiplying the number of even-indexed-numbers results in a double digit number do this:
      if( ((parseInt(stringOfNum[i])) * 2) > 9 ){
        //this takes the double digit number and make it a string, then adds the two digits
        even2Digit = (parseInt(stringOfNum[i]) * 2).toString();
        even2DigitResult = parseInt(even2Digit[0]) + parseInt(even2Digit[1]);
        sumEven += even2DigitResult;

      } else {
        // even-indexed-numbers who are a single digit when multiplied by 2 will just add that values to the evenSum
        let evenResult = parseInt(stringOfNum[i]) * 2;
        sumEven += evenResult;

      }
    }

  }

//final test: is evenSum + oddSum is divisible by 10 then the card Number is valid
  if((sumEven + sumOdd) % 10 ===0){
    return true;
  } else{
    return false;
  }

}

console.log(checkLuhn(5217291871048701), " should result in true");
console.log(checkLuhn(5217291871048701), " should result in true");
