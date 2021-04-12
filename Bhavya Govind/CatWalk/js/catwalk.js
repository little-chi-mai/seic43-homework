let cat1 = document.querySelector('.cat');
console.log(cat1);
cat1.style.left = '0px';
cat1.style.top = '60px';
const moveCat = function(){
  let currentPos = parseInt(cat1.style.left);
  let catTailPosition = parseInt(cat1.offsetLeft);
  
  if(cat1.offsetLeft - cat1.style.width >= window.innerWidth){
    cat1.style.webKitTransform = "scaleX(-1)";
    cat1.style.left = '0px';

  }else{
    cat1.style.left = (currentPos + 10) + 'px';
  }
}
window.setInterval(moveCat,100);
