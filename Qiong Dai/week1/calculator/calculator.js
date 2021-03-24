console.log("hello world");

// Part 1
const squareNumber = function (num1) {
  let result = num1 * num1;
  console.log(result);
  return result;
}
squareNumber(3);



const halfNumber = function (num2) {
  let result = num2 / 2;
  console.log(result);
  return result;
}
halfNumber(5);



const percentOf = function (num3, num4) {
  let percentNum = (num3 / num4) * 100;
  let result = `${num3} is ${percentNum}% of ${num4}.`
  console.log(result);
  return percentNum;
}
percentOf(2,4);



const areaOfChircle = function (radius){
  let area = Math.PI * (radius ** 2);
  let result = `The area for a circle with radius ${radius} is ${Number.parseFloat(area).toFixed(2)}`;
  console.log(result);
  return area;
}
areaOfChircle(2);


//Part 2

const myCalculator = function (num5){
  let no1 = halfNumber(num5);
  let no2 = squareNumber(no1);
  let no3 = areaOfChircle(no2);
  let no4 = percentOf(no3,no2);
  let result = `Area is ${no4}% of square.`
  console.log(result);
}
myCalculator(4);
