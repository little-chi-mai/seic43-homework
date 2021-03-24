
//The Calculator
//PART ONE
//1.
const squareNumber = function(a){
  const result = Math.pow(a,2);
  console.log(`The result of squaring the number ${ a } is ${result}.`)
  return result;
}
//squareNumber(2);

//2.
const halfNumber = function (a){
  const result = a / 2;
  console.log(`Half of ${ a } is ${ result }.`)
  return result;
}
//halfNumber(2.5);

//3.
const percentOf = function (x,y){
  const result = 100 * x / y;
  console.log(`${ x } is ${ result }% of ${ y }`);
  return result;
}
//percentOf(3,10);

//4.
const areaOfCircle = function (radius){
    const result = Math.PI * radius * radius;
    console.log(`The area for a circle with radius ${ radius } is ${Math.round(result * 100) / 100 }.`);
    return result;
}
//areaOfCircle(2.5);

/*
PART TWO
1. Take half of the number and store the result.
2. Square the result of #1 and store that result.
3. Calculate the area of a circle with the result of #2 as the radius.
4. Calculate what percentage that area is of the squared result (#3).
*/

const partTwo = function (a) {
 const one = halfNumber(a);
 const two = squareNumber(one);
 const three = areaOfCircle(two);
 const result = percentOf(three,two);
 console.log(`Half of the number is ${ one }, that number squared is ${ two }, the area of a circle with the squared number as the radius is ${ three} and the percentage of the area and the number squared is ${ result }.`);

}
partTwo(4);
