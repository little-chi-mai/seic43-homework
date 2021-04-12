console.log("It's working")



const img = document.getElementById('cat-background');
img.style.position = 'absolute';
img.style.right = '450px';
img.style.top = "10px";


const catMove = function() {
  let oldPos = parseInt(img.style.right);
  let newPos = oldPos + 4;
  img.style.right = newPos + 'px';
  img.setAttribute('width', img.width-1.5);
};
window.setInterval(catMove, 15);

const imgcat = document.getElementById('cat');
imgcat.style.position = 'absolute';
imgcat.style.top = '1300px';
imgcat.style.left = '100px';


// New Addition to already working

// const questionMark = document.getElementsByTagName("p");
// questionMark.style.size = (Math.random() * 100);
// questionMark.style.position = 'absolute';
// questionMark.style.right = (Math.random() * 1000)
// const questionMove = function() {
//   let oldPos = parseInt(img.style.right);
//   let newPos = oldPos + 4;
//   img.style.right = newPos + 'px';
// };
// window.setInterval(questionMove, 15);
//
//
