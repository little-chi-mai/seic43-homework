// Given the following a rectangle object like the one below, write the following functions which accept a rectangle object as an argument:
//
  const rectangleA = {
    length: 4,
    width: 4
  };

// isSquare - Returns whether the rectangle is a square or not
  const isSquare = function (rect){
    if(rect.length === rect.width){
      return true;
    }
    return false;
  }
isSquare(rectangleA);

// area - Returns the area of the rectangle
const areaOfRec = function(rect){
  return rect.length * rect.width;
}
// perimeter - Returns the perimeter of the rectangle
const perimeter = function(rect){
  const result = 2 * (rect.length + rect.width);
  return result;
}

// Given the following a triangle object like the one below, write the following functions which accept a triangle object as an argument:
//

const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};
// isEquilateral - Returns whether the triangle is equilateral or not
const isEquilateral = function(tri){
  if(tri.sideA === tri.sideB && tri.sideB === tri.sideC){
    return 'isEquilateral';
  }
  // isIsosceles - Returns whether the triangle is isosceles or not
  if(tri.sideA === tri.sideB || tri.sideB === tri.sideC || tri.sideC === tri.sideA){
    return 'isIsosceles';

  }
  // isObtuse - Returns whether the triangle is obtuse or not

 let a = tri.sideA * tri.sideA;
 let b = tri.sideB * tri.sideB;
 let c = tri.sideC * tri.sideC;

  if( a > (b + c) ||  b > (a + c) || c > (a + b)){
    return `triangle is obtuse `
  }



}
// area - Returns the area of the Triangle
const area = function(tri){
  let s = (tri.sideA + tri.sideB + tri.sideC)/2;
  //area  = sqrt( s(s-a)(s-b)(s-c) )
  let area = s * ( s - tri.sideA)*( s - tri.sideB)*(s - tri.sideC);
  area = sqrt(area);
  return area;
}





// Write a function called cashRegister that takes a shopping cart object.
// The object contains item names and prices (itemName: itemPrice).
// The function should return the total price of the shopping cart.


var cartForParty = {
  banana: 1.25,
  handkerchief: 0.99,
  Tshirt: 25.01,
  apple: 0.60,
  nalgene: 10.34,
  proteinShake: 22.36
};


function cartPrice(cartForParty){

  let amount = 0;
  for(var price in cartForParty) {
    if(cartForParty.hasOwnProperty(price)) {
         amount = cartForParty[price] + amount;
    }
  }
  return amount
}
 console.log(`amount of the total items in cart is ${cartPrice(cartForParty)}`);
// You're starting your own credit card business. You need to come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
//
// Here are the rules for a valid number:
//
// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16
// The following credit card numbers are valid:
//
// 9999777788880000
// 6666666666661666
// The following credit card numbers are invalid:
//
// a92332119c011112 invalid characters
// 4444444444444444 only one type of number
// 1111111111111110 sum less than 16
// 6666666666666661 odd final number
// In order to run the function, you'll need to know how to load javascript on an HTML page. From there, you will open your developer console to call the function.


const validateCard = function(cardNum1){
  let cardNum = cardNum1.toString();
  let isDuplicate = true;
  let sum = 0;
  let isEven = false;

  //code to check duplicates in the number

  for (let i = 1; i < cardNum.length; i++){
    if (cardNum[0] !== cardNum[i]) {
            isDuplicate = false;
            break;
        }
  }
  //code to add all numbers in the code

  for(let i = 0; i < cardNum.length; i++){
    sum = sum + parseInt(cardNum[i]);

  }
  // code to check card ends with even number
  if(parseInt(cardNum.endsWith()) % 2 === 0 || cardNum.endsWith() == 0){
    isEven = true;

  }
  // code to check all conditions
  if ((cardNum.length === 16) && !isNaN(cardNum1) && sum > 16 && !isDuplicate && isEven) {
    console.log("Card is valid");
  }else{
    console.log("card is not valid");
  }
}
 validateCard('a92332119c011112');
 validateCard(1111111111111111);
 validateCard(9999777788880000);
//
//  Bank
//
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
// Accounts
//
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.

//Bank Object Creation
const Westpac = {
  accounts:[],
  total:function(){
    let accArr = this.accounts
    let amount = 0;
    for(let i = 0; i < accArr.length;i++){
      amount = amount + accArr.currentBalance;
    }
    console.log(amount);
  },
  addAccount: function(acc){
    let newAccount = {};
     newAccount.ownerName = acc.name;
    if(acc.amount > 0){
      newAccount.currentBalance = acc.amount;
      newAccount.msg = acc.msg;
      console.log(`Account created with details`, newAccount);
      this.accounts.push(newAccount);
    }else{
      console.log("Cannot create an account with negative amount");
    }


  },
  transfer:function(acc1,acc2,amount){
    let msg = `${amount} has been transfered to ${acc2.ownerName}`;
    Account.withdraw(acc1,amount,msg);
    msg =  `${amount} has been recieved from ${acc1.ownerName}`
    Account.deposit(acc2,amount,msg);
    console.log(` ${acc1.ownerName} has trasfered an amount of ${amount} to ${acc2.ownerName} `);

  }
}

//Account
const Account = {
  currentBalance:0.00,
  ownerName:"",
  referal:`Santhosh`,
  deposit: function(acc, amount,msg){
    acc.currentBalance = acc.currentBalance + amount;
    console.log(`${ amount } is deposited in the account.`);
    acc.msg.push(msg);
  },
  withdraw: function(acc, amount,msg){
    acc.currentBalance = acc.currentBalance - amount;
    console.log(`${ amount } is withdraw from the account.`);
    acc.msg.push(msg);
  },
  msg:[]
}

//Account1
const acc1 = {
  name:"Bhavya",
  amount:123456789,
  msg:[]
};

//Account 2
const acc2 = {
  name:"Govind",
  amount:1000,
  msg:[]
};


//Add account
Westpac.addAccount(acc1);
Westpac.addAccount(acc2);

console.log("Account details before transfer: \n", Westpac.accounts);

Westpac.transfer(Westpac.accounts[0],Westpac.accounts[1],10);

console.log("Account details after transfer:\n ", Westpac.accounts);
