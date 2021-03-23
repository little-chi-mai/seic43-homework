//DrEvil
function DrEvil(amount){

  is = (amount + " dollars");
  if(amount == 1000000){
    console.log(is + " (pinky)");
  }
  else{
      console.log(is);
    }
}
DrEvil(10);
DrEvil(1000000);

//MixUp
function mixUp(a,b){
  console.log(b.slice(0,2) + a.slice(2) + " " + a.slice(0,2) + b.slice(2));
}

mixUp('mix','pod');
mixUp('dog','dinner');

//FixStart
function fixStart(a){
  var test = a.charAt(0);
  console.log(test + a.slice(1).replace(new RegExp(test, 'g'), '*'));
}
fixStart('fefefele');

//Verbing
function verbing(a){
  if(a.length<3) console.log(a);
  if(a.slice(-3) =='ing'){
    console.log(a + 'ly');
  }
  else{
    console.log(a + "ing");
  }
}
verbing('swim');

//not Bad
function notBad(a){
  var not = a.indexOf('not');
  var bad = a.indexOf('bad');
  if(not == -1 || bad == -1 || bad < not) console.log(a);
  console.log(a.slice(0, not) + "good" + a.slice(bad + 3));
}
notBad('This dinner is not that bad!');
notBad('This movie is not so bad!');
notBad('This dinner is bad!');
