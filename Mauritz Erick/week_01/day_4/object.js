/*Part 1 - Rectangle
Given the following a rectangle object like the one below, write the following functions which accept a rectangle object as an argument:

isSquare - Returns whether the rectangle is a square or not
area - Returns the area of the rectangle
perimeter - Returns the perimeter of the rectangle
*/

const rectangleA = {
    length:4,
    width: 4,
};

const rectangleB = {
    length:5,
    width: 4,
};

const isSquare = function(rec){
    if (rec.length === rec.width){
        console.log("It's a square")
    } else {
        console.log("It's a normal rectangle");
    }
}
isSquare(rectangleA);
isSquare(rectangleB);

const area = function(rec){
    console.log("The area is: " + rec.length * rec.width);
   
}
area(rectangleA);
area(rectangleB);

const perimeter = function(rec){
    console.log("The perimeter is: " + 2 * (rec.length + rec.width));
}
perimeter(rectangleA);
perimeter(rectangleB);


/*Part 2 - Triangle
Given the following a triangle object like the one below, write the following functions which accept a triangle object as an argument:

isEquilateral - Returns whether the triangle is equilateral or not
isIsosceles - Returns whether the triangle is isosceles or not
area - Returns the area of the Triangle
isObtuse - Returns whether the triangle is obtuse or not
*/

const triangleA = {
    sideA: 5,
    sideB: 6,
    sideC: 7
}

const triangleB = {
    sideA: 9,
    sideB: 10,
    sideC: 9
}

const isEquilateral = function(tri){
    if(tri.sideA == tri.sideB && tri.sideB == tri.sideC){
        console.log("The triangle is equilateral ");
    }
    else{
        console.log("The triangle is not equilateral");
    }
}
isEquilateral(triangleA);



const isIsosceles = function(tri){
    if (tri.sideA == tri.sideB || tri.sideB == tri.sideC || tri.sideA == tri.sideC){
        console.log("The triangle is isosceles ");
    } else {
        console.log("The triangle is not isosceles ");
    }
}
isIsosceles(triangleA);

const areaOfTriangle = function(tri){
  p = (tri.sideA + tri.sideB + tri.sideC)/2;
  console.log(Math.sqrt(p * ((p - tri.sideA) * (p - tri.sideB) * (p - tri.sideC))));
}
areaOfTriangle(triangleA);

const isObtuse = function(tri){

    let a = Math.pow(tri.sideA,2);
    let b = Math.pow(tri.sideB,2);
    let c = Math.pow(tri.sideC,2);
    let max = Math.max(a,b,c);
    let min = Math.min(a,b,c);
    let middle = a+b+c - Math.min(a,b,c) - Math.max(a,b,c);
    console.log(middle);
    if ( max > min + middle ){
        console.log("The triangle is obtuse");
    } else {
        console.log("The triangle is not obtuse");
    }
}
isObtuse(triangleA);
isObtuse(triangleB);





/*The Cash Register
Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.
*/

const cartForParty = {  
    banana: 1.25,
    handkerchief: .99,
    Tshirt: 25.01,
    apple: 0.60,
    nalgene: 10.34,
    proteinShake: 22.36
  };

  const cartForBirthday = {  
    banana: 1.25,
    handkerchief: .99,
    Tshirt: 25.01,
    apple: 0.60,
    nalgene: 10.34,
    proteinShake: 23.36
  };


  const cashRegister=function(cart){
    let items = Object.keys(cart); // array of items by key   
    let sum = 0; 
    
    for (let i = 0; i < items.length; i++) {
      let itemName = items[i]; // get the name of the key for the item
      let itemPrice = cart[itemName]; // get the price for the item
      sum = sum + (itemPrice); // convert the price to a float and add it to the sum
    }
    return sum;
  }
console.log("The total is: "  + cashRegister(cartForParty));
console.log("The total is: " + cashRegister(cartForBirthday));






//Credit Card Validation
/*
Here are the rules for a valid number:
Number must be 16 digits, all of them must be numbers
You must have at least two different digits represented (all of the digits cannot be the same)
The final digit must be even
The sum of all the digits must be greater than 16
*/

const validateCreditCard = function(creditCardNum){

    //check if its 16
    if(creditCardNum.length !== 16){
      return false;
    }

    //check if its a number
    for(var i = 0; i < creditCardNum.length; i++){
      var currentNumber = creditCardNum[i];
      currentNumber = Number.parseInt(currentNumber);
      if(!Number.isInteger(currentNumber)){
        return false;
      }
    }
  
    //at least two different digits
    var obj = {};
    for(var i = 0; i < creditCardNum.length; i++){
      obj[creditCardNum[i]] = true;
    }
    if(Object.keys(obj).length < 2){
      return false;
    }
  
    // The final digit of the credit card number must be even
    if(creditCardNum[creditCardNum.length - 1] % 2 !== 0){
      return false;
    }
  
    // The sum of all the digits must be greater than 16
    var sum = 0;
    for(var i = 0; i < creditCardNum.length; i++){
      sum += Number(creditCardNum[i]);
    }
    if(sum <= 16){
      return false;
    }
  
    return true;
  };
  
  console.log(validateCreditCard('9999777788880000')); //true
  console.log(validateCreditCard('6666666666661666')); //true
  console.log(validateCreditCard('a92332119c011112')); //false
  console.log(validateCreditCard('4444444444444444')); //false
  console.log(validateCreditCard('1211111111111112')); //true



  //Bank
  function Account(name, balance){
    this.name = name;
    this.balance = balance;
  }

  Account.prototype.deposit = function(amount){
    if(this._isPositive(amount)){
      this.balance += amount;
      console.info(`Deposit: ${this.name} new balance is ${this.balance}`);
      return true;
    }
    return false;
  }

  Account.prototype.withdraw = function(amount){
    if(this._isAllowed(amount)){
      this.balance -= amount;
      console.info(`Withdraw: ${this.name} new balance is ${this.balance}`);
      return true;
    }
    return false;
  }
  
  Account.prototype.transfer = function(amount, account) {
    if (this.withdraw(amount) && account.deposit(amount)) {
    console.info(`Transfer: ${amount} has been moved from ${this.name} to ${account.name}`);
    return true;
    }
    return false;
    }
    
    
    Account.prototype._isPositive = function(amount) {
    const isPositive = amount > 0;
    if (!isPositive) {
    console.error('Amount must be positive!');
    return false;
    }
    return true;
    }
    
    Account.prototype._isAllowed = function(amount) {
    if (!this._isPositive(amount)) return false;
    
    const isAllowed = this.balance - amount >= 0;
    if (!isAllowed) {
    console.error('You have insufficent funds!');
    return false;
    }
    return true;
    }
    
    const a = new Account('David', 100);
    const b = new Account('James', 0);
    
    
console.log(`before: David: ${a.balance}, James: ${b.balance}\n`);
    
    a.transfer(100, b);
    
console.log(`after: David: ${a.balance}, James: ${b.balance}\n`);
  