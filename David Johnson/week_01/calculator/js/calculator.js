  //PART 1

//Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
let squaredNum = null;

const squareNumber = function (num) {
  const initialNum = num
  squaredNum = num*num
  num = num*num;
  console.log(`The result of squaring ${initialNum} is ${num}.`);
  return squaredNum;
  return num;
}
squareNumber(10);

//Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
const halfNumber = function (num) {
  const initialNum = num
  num = num/2;
  console.log(`Half of ${initialNum} is ${num}.`);
  return num;
}
halfNumber(10);

//Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."


const percentOf = function (num1, num2) {
  num = (num1/num2)*100
  console.log(`${num1} is ${num}% of ${num2}.`);
  return num
}
percentOf(5, 10);

//Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
const areaOfCircle = function (num) {
  const radius = num
  radiusSquared = num **2;
  num = Math.PI*radiusSquared;
  console.log(`The area of a circle with a radius of ${radius} is ${num.toFixed(2)}.`);
  return num;
}
areaOfCircle(10);

//Bonus: Round the result so there are only two digits after the decimal.
//Done.

    //PART 2
//Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
  //Take half of the number and store the result.
  //Square the result of #1 and store that result.
  //Calculate the area of a circle with the result of #2 as the radius.
  //Calculate what percentage that area is of the squared result (#3).

//const masterFunction = function (num) {
  //halvedNum = num/2;
  //squaredNum = halvedNum * halvedNum;
  //radiusSquared = squaredNum*squaredNum;
  //area = Math.PI*radiusSquared;
  //finalAnswer = area/squaredNum;
  //console.log(finalAnswer)
  //return finalAnswer;
//}

//masterFunction(100);

const masterFunction = function (num) {
  num = halfNumber(num);
  num = squareNumber(num);
  num = areaOfCircle(num);
  num = percentOf(num, squaredNum);
  console.log(num);
  return num;
}

masterFunction(10);
