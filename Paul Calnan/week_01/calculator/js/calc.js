
//Calculator Part 1
const squareNumber = function(number){
  const result = (number * number);
  console.log(`The result of squaring the number ${ number } is ${ result }`)
  return result;
};

squareNumber(5);

//HalfOf
const halfNumber = function(number){
  const result = number / 2;
  console.log(`The result of halving the number ${ number } is ${ result }`)
  return result;
};

halfNumber(5);

//PercentOf
const percentOf = function(number1, number2){
  const result = number1 / number2 * 100;
  console.log(`${ number1 } is ${ result }% of ${ number2 }`)
  return result;
};

percentOf(2, 4);

//AreaOfCircle
const areaOfCircle = function(radius){
  const area = Math.PI * radius**2;
  const rounded = area.toFixed(2);
  console.log(`The Area of a circle with radius ${ radius } is ${ area } or ${ rounded } rounded`)
  return area;
  return rounded;
  };

areaOfCircle(2);

//Part 2
const part2 = function(aNumber){
  const result1 = halfNumber(aNumber);
  const result2 = squareNumber(result1);
  const result3 = areaOfCircle(result2);
  const result4 = percentOf(result3, result2);
};

part2(4);
