 const cat = document.querySelector('.cat');

 cat.style.left = '0px';


  // Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.
  //
//function to make cat walk one way
const catWalk = function() {
   let windowWidth = window.innerWidth - 150;

    let oldLeft = parseInt(cat.style.left);
    let newLeft = oldLeft + 10;

    if(newLeft < windowWidth){
      cat.style.left = newLeft + 'px';
    }else{
      cat.style.left = '0px';
    }

}
//testcase:
// window.setInterval(catWalk, 100);
// function to make cat walk one way



 // Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.
// function to make cat CONTINUE WALKING BACK AND FORTH
let pos = 0; //
let maxDistanceToTravel = window.innerWidth; //how much the cat has to travel by
let end = maxDistanceToTravel; //what is the end position
let direction = 1; // positive 1 means its going left --> right, -1 means right -->

const catWalkBackAndForth = function() {
  if(pos === end){
    direction *= -1; // This reverses the current direction

    if(direction > 0){
      cat.style.transform = 'scaleX(1)';
    }else {
      cat.style.transform = 'scaleX(-1)';
    }

    end = Math.abs(maxDistanceToTravel - end);
  }

  pos += (direction * 10);
  cat.style.left = pos + 'px';

}
//testcase
// setInterval(catWalkBackAndForth, 100);
//function to make cat CONTINUE WALK BACK AND FORTH



 // Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.

const dancingCat = document.querySelector('.dancing-cat'); // find the dancing cat
dancingCat.classList.add('hidden'); //make dancing cat hidden first
let counter; // to store the integer for clearInterval


const catDance = function() {
  let windowWidth = window.innerWidth - 150;

   let oldLeft = parseInt(cat.style.left);
   let newLeft = oldLeft + 10;
   let timeToDance = false;

   // if the cat walks onto the part of the screen of the dancing cat then its Time to Dance!
   if(cat.getBoundingClientRect().right >= dancingCat.getBoundingClientRect().left &&  cat.getBoundingClientRect().left <= dancingCat.getBoundingClientRect().right){

     // clearInterval(counter);
     // appear();
     timeToDance = true;
     // newLeft = dancingCat.getBoundingClientRect.right + 1;

   }else{
     timeToDance = false;
   }

   if(timeToDance === true){
     clearInterval(counter); //this stops the walking cat
     appear(timeToDance); //makes the dancing cat appear
     // newLeft = dancingCat.getBoundingClientRect().right + 1;
     timeToDance = false;
   } else{
     if(newLeft < windowWidth){
       cat.style.left = newLeft + 'px';
     }else{
       cat.style.left = '0px';
     }
   }

}

const appear = function(timeToDance){
  //make dancing cat appear
  dancingCat.classList.remove('.hidden');
  dancingCat.classList.add('appear'); // makes the dancing cat appear
  cat.classList.add('hidden'); // makes the walking cat disappear
  cat.style.left = dancingCat.getBoundingClientRect().right + 2 + 'px'; //moves the walking cat to after the dancing cat
  setTimeout(startAgain, 3000); // makes the dance cat hidden and black cat walk again

}

const startAgain = function(){
  dancingCat.classList.remove('appear');
  dancingCat.classList.add('hidden'); //makes the dancing cat hidden
  cat.classList.remove('hidden');
  cat.classList.add('appear'); // makes the walking cat visibile
  counter = setInterval(catDance, 100); // makes the cat continue walking till it hits the dancing cat again and restarts the whole isDanceTime process
}


//test case:
// let counter = setInterval(dancingCat, 100);

// makes the cat dance for 3 seconds then keep walking!
