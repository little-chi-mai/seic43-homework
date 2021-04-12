
const image = document.getElementsByTagName('img')[0];
image.style.position = 'absolute';
image.style.left = '0px';

const catWalk = function () {

  let direction = 10;
  let oldStart= parseInt(image.style.left);
  let newStart = parseInt(oldStart + direction);
  image.style.left = newStart + 'px';

  if (parseInt(image.style.left) > (window.innerWidth - image.width)){
    console.log('its farther than the edge!');
    image.className = 'flip';

    image.style.left = window.innerWidth - image.width - 1 +'px';

    console.log('the window inner width less the image width is ' + (window.innerWidth - image.width - 1));

    console.log('the left side of the image is' + image.style.left);

    direction = -10



  }

}


const werkIt = setInterval(catWalk,50);

















  // if (parseInt(image.style.left) > window.innerWidth) {
  //   const startAgain = 0;
  //   image.style.left = startAgain + 'px';
  //
  // }

  // if (parseInt(image.style.left) > 500) {
  //
  //   clearInterval(werkIt);
  // }
//};
