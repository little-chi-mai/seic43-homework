//Write a function called squareNumber that will take one argument (a number), square that number,and return the result.
//It should also log a string like "The result of squaring the number 3 is 9."

const squareNumber = function (number){
  const calculateMe = (number ** 2);
  console.log(`The result of squaring the number is ${calculateMe}`);
  return calculateMe;
}

squareNumber(3);

//Write a function called halfNumber that will take one argument (a number), divide it by 2, and return
//the result. It should also log a string like "Half of 5 is 2.5.".

const halfNumber = function (number){
  const calculateMe = number/2
  console.log(`Half of ${number} is ${calculateMe}`);
  return calculateMe;
}

halfNumber(10);

//Write a function called percentOf that will take two numbers, figure out what percent the first number
//represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

const percentOf = function (a,b){
  const calculateMe = (a/b)*100;
  console.log(`${a} is ${calculateMe}% of ${b}`);
  return calculateMe;
}

percentOf(5,15);


//Write a function called areaOfCircle that will take one argument (the radius), calculate the area based
//on that, and return the result. It should also log a string like "The area for a circle with radius 2
//is 12.566370614359172."
//Bonus: Round the result so there are only two digits after the decimal.

const areaOfCircle = function(radius){
  const calculateMe = Math.PI * (radius ** 2);
  console.log(`The area for a circle with radius ${radius} is ${calculateMe.toFixed(2)}`);
  return calculateMe;
}

areaOfCircle(3);

//Write a function that will take one argument (a number) and perform the following
//operations, using the functions you wrote earlier:

//Take half of the number and store the result.
//Square the result of #1 and store that result.
//Calculate the area of a circle with the result of #2 as the radius.
//Calculate what percentage that area is of the squared result (#3).


const megaCalculator = function (number){
  const squaredResult = squareNumber(halfNumber(number));
  const areaResult = areaOfCircle(squaredResult);

  const calculateMe = areaResult / squaredResult;

  console.log(`The result of the Mega Calculation is ${calculateMe}`);
}

megaCalculator(5);
