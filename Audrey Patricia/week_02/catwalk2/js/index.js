

const computerCat = document.querySelector('.computer-cat');
computerCat.style.bottom = '0px';

let pos = 0;
let maxDistanceToTravel = 500;
let end = maxDistanceToTravel;
let direction = 1;

const catBackAndForth = function() {
  if(pos === end){
    direction *= -1; // This reverses the current direction

    if(direction > 0){
      computerCat.style.transform = 'scaleX(1)';
    }else {
      computerCat.style.transform = 'scaleX(-1)';
    }

    end = Math.abs(maxDistanceToTravel - end);
  }

  pos += (direction * 10);
  computerCat.style.left = pos + 'px';

  if(css.style.opacity > 1){
    clearInterval(moveTimer)
    computerCat.classList.add('hidden');
    showOtherCats();
    setInterval(dyingCatMove, 50);
    setInterval(omgCatAppear, 100);
    setTimeout(setInterval(nopeCatAppear, 150), 2000);
    setTimeout(setInterval(watchKittyBomb,100), 2000);
    setTimeout(bombScreen, 6000);
    //bomb the screen
    setTimeout(timeToDance, 7000);

  }

}

//make the computer cat move
let moveTimer = setInterval(catBackAndForth, 80)

//make CSS appear
const css = document.querySelector('.css');
css.classList.add("hidden");
css.style.right = '0px';
css.style.width = "20%";

function unfade() {
    css.classList.remove('hidden');
    css.style.opacity = "0.1";
    css.classList.remove('visibile');
    let op = 0.1;  // initial opacity
    // element.style.display = 'block';
    let timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        css.style.opacity = op;
        css.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 300);
}

setTimeout(unfade, 1000);



let dyingCat = document.querySelector('.dying-cat');
dyingCat.style.top = "300px";
dyingCat.style.left = "-500px";
// dyingCat.classList.add("hidden");
dyingCat.style.transform = 'scaleX(-1)';

let omgCat = document.querySelector('.omg-cat');
omgCat.style.width = "20%";
omgCat.style.top = "0px";
omgCat.style.left = "0";
omgCat.classList.add("hidden");

let pleaseStopCat = document.querySelector('.please-stop');
pleaseStopCat.style.bottom = "0";
pleaseStopCat.classList.add("hidden");

let grenadeCat = document.querySelector('.grenade-cat');
grenadeCat.style.bottom = '-150px';
grenadeCat.style.right = '-100px';
grenadeCat.classList.add("hidden");
grenadeCat.style.zIndex = "1";

const showOtherCats = function(){
  dyingCat.classList.remove('hidden');
  omgCat.classList.remove('hidden');
  pleaseStopCat.classList.remove('hidden');
  grenadeCat.classList.remove('hidden');

  dyingCat.classList.add('visible');
  omgCat.classList.add('visible');
  pleaseStopCat.classList.add('visible');
  grenadeCat.classList.add('visible');

}

const dyingCatMove = function() {
   let windowWidth = window.innerWidth - 150;

    let oldLeft = parseInt(dyingCat.style.left);
    let newLeft = oldLeft + 10;

    if(newLeft < windowWidth){
      dyingCat.style.left = newLeft + 'px';
    }else{
      dyingCat.style.left = '-10px';
    }

}

let catPos = 0;
let maxDistToTravel = 200;
let endPoint = maxDistToTravel;
let catDirection = 1;

const omgCatAppear = function() {
  if(catPos === endPoint){
    catDirection *= -1; // This reverses the current direction

    endPoint = Math.abs(maxDistToTravel - endPoint);
  }

  catPos += (catDirection * 10);
  omgCat.style.left = catPos + 'px';

}

let nopePos = 0;
let distToTravel = 200;
let endSpot = distToTravel;
let nopeDirection = 1;

const nopeCatAppear = function() {
  if(nopePos === endSpot){
    nopeDirection *= -1; // This reverses the current direction

    endSpot = Math.abs(distToTravel - endSpot);
  }

  nopePos += (nopeDirection * 10);
  pleaseStopCat.style.left = nopePos + 'px';

}

const watchKittyBomb = function() {
  let oldBottom = parseInt(grenadeCat.style.bottom);
  let newBottom = oldBottom + 10;
  grenadeCat.style.bottom = newBottom + 'px';
};


const explosion = document.querySelector('.explosion');
explosion.style.width = '100%';
explosion.classList.add('hidden');

const bombScreen = function(){
  grenadeCat.classList.remove('visible');
  pleaseStopCat.classList.remove('visible');
  omgCat.classList.remove('visible');
  dyingCat.classList.remove('visible');
  css.classList.remove('visible');
  grenadeCat.classList.add('hidden');
  pleaseStopCat.classList.add('hidden');
  omgCat.classList.add('hidden');
  dyingCat.classList.add('hidden');
  css.classList.add('hidden');


  explosion.classList.remove('hidden');
  explosion.classList.add('visible');
}


const danceFloor = document.querySelector('.dance-floor');
danceFloor.style.height = "100%";
danceFloor.classList.add('hidden');

const timeToDance = function(){
  danceFloor.classList.remove('hidden');
  danceFloor.classList.add('visible');

  danceCat.classList.remove('hidden');
  danceCat.classList.add('visible');

  setInterval(catHurrahDance,100);
}

const danceCat = document.querySelector('.dance-cat');
danceCat.style.height = "100%";
danceCat.classList.add('hidden');

let dancePos = 0;
let danceDistanceToTravel = 500;
let endDance = danceDistanceToTravel;
let danceDirection = 1;

const catHurrahDance = function() {
  if(dancePos === endDance){
    danceDirection *= -1; // This reverses the current direction

    endDance = Math.abs(danceDistanceToTravel - endDance);
  }

  dancePos += (danceDirection * 10);
  danceCat.style.left = dancePos + 'px';


}
