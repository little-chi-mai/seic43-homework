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

//avaScript Bank
/*In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.

Bank
There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

The bank has many accounts. Accounts should be objects that all share a set of common functionality.

Accounts
Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.

There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.

You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
*/
//Account to add;
const newAccount = {
  id: 4,
  name: 'jpo',
  currentBalace: 10
}
//array of accounts
let accounts = [
  {
  id: 1,
  name: 'Gary',
  currentBalace: 20
  },
  {
    id: 2,
    name: 'George',
    currentBalace: 40
  },
  {
    id: 3,
    name: 'Matte',
    currentBalace: 50
  },
  {
    id: 4,
    name: 'jo',
    currentBalace: 0
  }
];

// Calculate total bank amount
let totalAmountsInBank = 0;

for (let i = 0; i < accounts.length; i++) {
  totalAmountsInBank = totalAmountsInBank + accounts[i].currentBalace;

};
console.log ('Total amount in bank is ' + totalAmountsInBank);

// to add new acccount
const addAccount = function (account) {
  let accountFound = false; // Account not exist

  for (let i = 0; i < accounts.length; i++) {

    if (account.id === accounts[i].id ) {
      accountFound = true; // account exist
      break;
    }
  }

  if(!accountFound) {
    accounts.push(account);
  }

  return accounts;
}
addAccount(newAccount);
// Validating an account
const validateAccount = function (accountid) {
let validAccount = false;
  for (let i = 0; i < accounts.length; i++) {

    if (accounts[i].id === accountid) {
      console.log('Valid Account');
      validAccount = true;
      break;
    }
  };
  if (!validAccount) {
    console.log('Invalid account ID please enter valid ID')

  };
}


//validateAccount();
// to deposit an ammount
  let deposit = function (id, amount) {
  //const accountHolderid = prompt ('Please enter you account id');
  let accountHolderid = id;
  console.log('Your accountid is ' + accountHolderid);
  checkid = parseInt(accountHolderid);
  validateAccount (checkid);
  if (!validateAccount) {
    return deposit;
  }

  //let depositeAmount = prompt ('How much would you like to deposite?');
    let depositeAmount = amount;
    for (let i = 0; i < accounts.length; i++){
      if (checkid === accounts[i].id){
      newBalance = parseInt(depositeAmount) + accounts[i].currentBalace;
      console.log ('Your new balance is ' + newBalance);

    }
  }
}
deposit(3, 20);

//deposit function

const withdraw = function (id, amount) {
  //const accountHolderid = prompt ('Please enter you account id');
  let accountHolderid = id;
  console.log('Your accountid is ' + accountHolderid);
  let checkid = parseInt(accountHolderid);
  validateAccount (checkid); // call validateAccount function
  //let withdrawAmount = prompt ('How much would you like to withdraw?');
    withdrawAmount = amount;
    for (let i = 0; i < accounts.length; i++) {

      if (checkid === accounts[i].id) {

        if (!(accounts[i].currentBalace <= 0))
       {
          newBalance = accounts[i].currentBalace - parseInt(withdrawAmount);
          console.log ('Your new balance is ' + newBalance + '. Amount withdrawn is ' + withdrawAmount + '$.');
       }
       else {
         console.log ('Sorry invalid transaction, not have enough amount');
    }
  }
}
}
withdraw(4, 20);
