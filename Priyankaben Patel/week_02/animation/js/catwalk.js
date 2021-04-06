
let img = document.getElementsByTagName('img')[0];
img.style.left = 0;
img.style.right = 0;

let newleft = 0

// walk to max window width
let maxWidth = window.innerWidth - 300;
let newRight = maxWidth;
let animateright;

// cat walk forward
 const  catWalk = function(){
   newleft +=  10;
       img.style.left = newleft + 'px';
       if(parseInt(img.style.left) >= maxWidth)
       {
           img.style.webkitTransform ="scaleX(-1)"; //chrome and safari
           img.style.msTransform="scaleX(-1)"; //internet explorer
           img.style.transform = "scaleX(-1)";
           animateright = setInterval(catwalkBack, 50);
           clearInterval(animate);
        }
  };

// cat walkback function
  const catwalkBack = function() {
      console.log('catWalking back')
      newleft = newleft - 10;
      img.style.left = newleft + 'px';

      if(parseInt(img.style.left) === 0){
          clearInterval(animateright);
      }
  };

   let animate = setInterval(catWalk, 50);
