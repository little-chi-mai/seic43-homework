// Create a function called DrEvil
    const DrEvil = function (amount) {
    let dollars = amount + ' dollars';
    //console.log(`Totalamount is ${dollars} dollars`);
    if (amount === 1000000){
      dollars = dollars + ' (pinky)';
    }
    return dollars;
  };
DrEvil(5);

//Create a function MixUp
  const mixUp = function (a, b) {
  const sliceA = a.slice(0, 2);
  const sliceAa = a.slice(2);
  const sliceB = b.slice(0, 2);
  const sliceBb = b.slice(2);
  const string = (sliceB + sliceAa) + " " + (sliceA + sliceBb);

return string;

}
mixUp('abc', 'xyz');

//Create a function called fixStart
const fixStart = function (a) {
  const newVersion = a.split("");
  for (let i = 1; i <= newVersion.length; i++)
    {
    if (newVersion[i] === newVersion[0]){
      newVersion[i] = '*';
    }
    }
      return newVersion;
    }
    fixStart('ayaansh');

//Create a function called verbing
    const verbing = function (x) {
    const sliceX = x.slice(x.length - 3);
    if ( x.length < 3){
        console.log(x);
    }
    else if ( sliceX !== 'ing') {
      console.log ( x + 'ing');
  }
    else if  (x.length >= 3 && sliceX === 'ing'){
      console.log(x + 'ly');
    }
  }

verbing('going');

//Create a  function Not Bad
/*const notBad = function (z){
  const separator = "";
  const arrayOfString = z.split(separator);
  for (i = 0, i <= arrayOfString.length; i++);
  {
    if ( arrayOfString[i] === "not" || arrayOfString[i] === "bad");
    {
      if ((arrayOfString[i] === "not") > (arrayOfString[i] === "bad");
      {
        arrayOfString [i] = "good"
      }
    }
  }
  const stg = arrayOfString.toString();
  console.log(stg);
  return stg;
}
notBad('This dinner is not that bad!');*/

const displayResult = function (x){

    for  (let i = 1; i <= x; i++)
    {
      if ( (x / i) === 0) {
        console.log (i);
        if ( i === 3)
        {
          console.log ('Pling');
        }
        else if ( i === 5) {
          console.log ('Plang');
        }
        else if (i === 7) {
          console.log ('Plong')
        }
        else {
          console.log(x.tostring(x))
        }
      }
    }
  }
  displayResult(28);
