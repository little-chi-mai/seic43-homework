// # The Calculator
//
// ## Part 1
// - Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
const squareNumber = function(number){
  const sqResult = number **2
  console.log(`The result of squaring the number ${number} is ${sqResult.toFixed(2)}.`)
  return sqResult
}
// squareNumber(3)
// squareNumber(4)

// - Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
const halfNumber = function(number){
  const halfResult = number/2
  console.log(`Half of ${number} is ${halfResult.toFixed(2)}!`)
  return halfResult
}
// halfNumber(100)
// halfNumber(365.2424)
// - Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
const percentOf = function(a, b){
  const resultantPrcnt = (a/b)*100
  console.log(`${a} is ${resultantPrcnt.toFixed(2)}% of ${b}`)
  return resultantPrcnt
}
// percentOf(10, 100)
// percentOf(1, 100)
// - Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
const areaOfCircle = function(radius){
  const area = Math.PI * radius **2
  console.log(`The area for a circle with radius ${radius} is ${area.toFixed(2)}`)
  return area
}
// areaOfCircle(2)
// areaOfCircle(1)
// - Bonus: Round the result so there are only two digits after the decimal.
//
// ## Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
const calculate = function(number){
  const halfResult = halfNumber(number)
  const sqResult = squareNumber(halfResult)
  const area = areaOfCircle(sqResult)
  const resultantPrcnt = percentOf(area, sqResult)
}

// - Take half of the number and store the result.
// - Square the result of #1 and store that result.
// - Calculate the area of a circle with the result of #2 as the radius.
// - Calculate what percentage that area is of the squared result (#3).
