//Create a function called DrEvil
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

const notBad = function (z) {
  let arrayOfString = z.split (' ');
  let indexNot;
  let indexBad;
  for (let i = 0; i < arrayOfString.length; i++) {

    if (arrayOfString[i] === 'not') {
      indexNot = i;
    }

    if (arrayOfString[i] === 'bad' || arrayOfString[i] === 'bad!') {
      indexBad = i;
    }
  }

  if ( indexNot < indexBad) {
    arrayOfString[indexNot] = 'good';
    for (let index = indexNot + 1; index <= indexBad; index++) { //'This dinner is not that bad!'

      arrayOfString[index] = '';
    }

  }
  return arrayOfString.join(' ');
}
notBad('This dinner is not that bad!');
