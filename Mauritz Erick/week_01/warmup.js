//warmup.js
console.log("Warm up - Raindrops\n\n");

function raindrop(num){
  var result = "";
  if(num % 3 === 0){
    result = result + " Pling";
  }
  if(num % 5 === 0){
    result += " Plang";
  }
  if(num % 7 === 0){
    result += " Plong";
  }
  if(result === ""){
    result = num + ''; //convert num to string
  }
  console.log(result);
  console.log(typeof(result));
}

raindrop(6);
raindrop(20);
raindrop(49);
raindrop(1755);
raindrop(34);
raindrop(31);
raindrop(105);
