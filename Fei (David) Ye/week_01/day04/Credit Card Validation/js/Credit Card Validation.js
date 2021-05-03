// # Credit Card Validation

// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.

// Here are the rules for a valid number:

// - Number must be 16 digits, all of them must be numbers
// - You must have at least two different digits represented (all of the digits cannot be the same)
// - The final digit must be even
// - The sum of all the digits must be greater than 16

// The following credit card numbers are valid:

// - `9999-9999-8888-0000`
// - `6666-6666-6666-1666`

// The following credit card numbers are invalid:

// - `a923-3211-9c01-1112` invalid characters
// - `4444-4444-4444-4444` only one type of number
// - `1111-1111-1111-1110` sum less than 16
// - `6666-6666-6666-6661` odd final number

// ## Example
// ```
// validateCreditCard('9999-9999-8888-0000'); // Returns: true
// ```

// *Hint*: Remove the dashed from the input string before checking if the input credit card number is valid.

// *Bonus*: Return an object indicating whether the credit card is valid, and if not, what the error is

// ```
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// ```

const validateCreditCard = (cardNumber) => {
  const cardNumberArr = cardNumber.split("-").join("").split("");

  let is16Digits = true;

  if (cardNumberArr.length !== 16) {
    is16Digits = false;
  }

  const reg = new RegExp("^[0-9]+$");

  for (let i = 0; i < cardNumberArr.length; i++) {
    if (!reg.test(cardNumberArr[i])) {
      is16Digits = false;
    }
  }

  let isMoreThanTwoDifferentDigits = true;

  if ([...new Set(cardNumberArr)].length <= 2) {
    isMoreThanTwoDifferentDigits = false;
  }

  let isLastDigitEven =
    (cardNumberArr[cardNumberArr.length - 1] - 0) % 2 === 0 ? true : false;


  
  let isSumOfAllDigitsGreaterThan16 = true;

  let cardNumberArrToNumberType = [];
  
  for (let i = 0; i < cardNumberArr.length; i++) {
    cardNumberArrToNumberType.push(cardNumberArr[i] - 0);
  }

  const sumOfAllDigits = cardNumberArrToNumberType.reduce((a, b) => a + b, 0);

  if (sumOfAllDigits <= 16) {
    isSumOfAllDigitsGreaterThan16 = false;
  }

  // lunhTest

  let lunhTest = true;

  let oddDigits = [];

  let evenDigits = [];

 cardNumberArrToNumberTypeReverse = cardNumberArrToNumberType.reverse();

  for (let i = 0; i < cardNumberArrToNumberTypeReverse.length; i++) {
    if (i % 2 !== 0) {
      evenDigits.push(cardNumberArrToNumberType[i]);
    } else {
      oddDigits.push(cardNumberArrToNumberType[i]);
    }
  }

  const sumOfAllOddDigits = oddDigits.reduce((a, b) => a + b, 0);

  const evenDigitsEachMultiplytwo = evenDigits.map((num)=>num*2);

  const evenDigitsEachMultiplytwoStr = evenDigitsEachMultiplytwo.map((num)=>num+'');

  for (let i = 0; i < evenDigitsEachMultiplytwoStr.length; i++) {
    if (evenDigitsEachMultiplytwoStr[i].length===2) {
      let splitNums=evenDigitsEachMultiplytwoStr[i].split('');
      for (let j = 0; j < splitNums.length; j++) {
        splitNums[j]=splitNums[j]-0;
      }
      evenDigitsEachMultiplytwoStr[i] = splitNums[0]+splitNums[1];
    }
    
  }


  const sumOfAllEvenDigitsAfterFormula = evenDigitsEachMultiplytwoStr.map((num)=>num-0).reduce((a, b) => a + b, 0);

  if ((sumOfAllOddDigits+sumOfAllEvenDigitsAfterFormula)%10!==0) {
    lunhTest=false;
  }

// lunhTest



  const checkList = [
    is16Digits,
    isMoreThanTwoDifferentDigits,
    isLastDigitEven,
    isSumOfAllDigitsGreaterThan16,
    lunhTest
  ];

  const errorList = [
    "wrong_length",
    "no_more_than_3_different_digits",
    "last_digit_not_even",
    "sum_of_all_digits_less_than_16",
    "luhn_test_failed"
  ];

  let errorsHappened = [];

  for (let i = 0; i < checkList.length; i++) {
    if (!checkList[i]) {
      errorsHappened += errorList[i] + ", ";
    }
  }

  let isValid = true;

  if (
    is16Digits &&
    isMoreThanTwoDifferentDigits &&
    isLastDigitEven &&
    isSumOfAllDigitsGreaterThan16 &&
    lunhTest
  ) {
    isValid = true;
  } else {
    isValid = false;
  }

  let returnCardInfo = {
    valid: isValid,
    number: cardNumber,
  };

  if (isValid == false) {
    returnCardInfo.error = errorsHappened;
  }

  return returnCardInfo;
};

console.log(validateCreditCard(`6666-6666-6666-1666`));
console.log(validateCreditCard(`a923-3211-9c01-1112`));
console.log(validateCreditCard(`4444-4444-4444-4444`));
console.log(validateCreditCard(`1111-1111-1111-1110`));
console.log(validateCreditCard(`6666-6666-6666-6661`));
console.log(validateCreditCard(`1111-1111-1111-1104`));

console.log(validateCreditCard(`5217-2918-7104-8701`));

console.log(validateCreditCard(`4328-6213-7594-1622`));
console.log(validateCreditCard(`5234-5263-9626-5606`));



// *Double Bonus*: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.

//Luhn Algorithm
//https://www.dcode.fr/luhn-algorithm
