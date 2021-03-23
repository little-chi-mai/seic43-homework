//Part1
console.log("Part 1 Calculator")
function squareNumber(number){
  squared = Math.pow(number, 2);
  console.log("The result of squaring the number " + number + " is " + squared);
}
squareNumber(5);

function halfNumber(num){
  divide = num / 2;
  console.log("\nHalf of " + num + " is " + divide);
}
halfNumber(5);

function percentOf(a,b){
  percentIs = (a/b*100);
  console.log(a + " is " + percentIs + "% of " + b);
}
percentOf(2,8);

function areaOfCircle(radius){
  area = (Math.PI * radius * radius);
  area = area.toFixed(2); //Bonus part
  console.log("\nThe area for a circle with radius " + radius + " is " + area )
}
areaOfCircle(2);


//Part2
console.log("\n\n\n\nPart 2 Calculator")
function part2(a){
  half = a / 2;
  sq = Math.pow(half, 2);
  area = 3.14 * sq * sq;
  percent = (sq/area*100);

  console.log("original value: " + a + "\n#1 Half: " + half + "\n#2 Square: "+  sq + "\n#3 Area: "+ area);
  console.log("\nthe percentage is " + percent + " %")
}

part2(50);
