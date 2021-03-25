//Part1
console.log("Part 1 Calculator")
function squareNumber(number){
  let squared = Math.pow(number, 2);
  console.log("\nThe result of squaring the number " + number + " is " + squared);
  return squared;
}
squareNumber(5);

function halfNumber(num){
  let divide = num / 2;
  console.log("Half of " + num + " is " + divide);
  return divide;
}
halfNumber(5);

function percentOf(a,b){
  let percentIs = (a/b*100);
  console.log(a + " is " + percentIs + "% of " + b);
  return percentIs;
}
percentOf(2,8);
function areaOfCircle(radius){
  var area = (Math.PI * radius * radius);
  var area = area.toFixed(2); //Bonus part
  console.log("The area for a circle with radius " + radius + " is " + area )
  return area;
}
areaOfCircle(2);


//Part2
console.log("\n\n\n\nPart 2 Calculator")
function part2(inside){
  let half = halfNumber(inside);
  let sq = squareNumber(half);
  let area2 = areaOfCircle(sq);
  let percent = percentOf(sq,area2);

  console.log("original value: " + inside + "\n#1 Half: " + half + "\n#2 Square: "+  sq + "\n#3 Area: "+ area2);
  console.log("\nthe percentage is " + percent + " %")
}
part2(500);
