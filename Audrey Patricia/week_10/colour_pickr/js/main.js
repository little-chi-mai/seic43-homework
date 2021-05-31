$(document).ready( function() {
  let canvas = document.getElementById('color-picker');
  let ctx = canvas.getContext('2d');
  let selected = document.getElementsByClassName("selected")[0];

  let circleRender = 0;

  const hexadecimal = {
    0: '0',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    10: 'A',
    11: 'B',
    12: 'C',
    13: 'D',
    14: 'E',
    15: 'F'
  };

  const hexConverter = function(r, g, b){
    let rgb = [r,g,b];
    let hex = ['#'];

    for(let i = 0; i < rgb.length; i++){
      let firstVal = Math.floor(rgb[i] / 16);
      hex.push(hexadecimal[firstVal]);
      let remainder = (rgb[i] / 16) - firstVal;
      let secondVal = remainder * 16;
      hex.push(hexadecimal[secondVal]);
    }

    return hex.join('')
  }

   // width 250 height 200
  let draw = function(){
    // create gradient
    let gradient = ctx.createLinearGradient(0, 0, 300, 0); // creating a linear gradient horizontally

    // create color stops
    gradient.addColorStop(0, "rgb(255, 0, 0)");
    gradient.addColorStop(0.15, "rgb(255, 0, 255)");
    gradient.addColorStop(0.33, "rgb(0, 0, 255)");
    gradient.addColorStop(0.49, "rgb(0, 255, 255)");
    gradient.addColorStop(0.67, "rgb(0, 255, 0)");
    gradient.addColorStop(0.84, "rgb(255, 255, 0)");
    gradient.addColorStop(1, "rgb(255, 0, 0)");

    //fill the gradient
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 300, 200);

    // create white and black
    gradient = ctx.createLinearGradient(0, 0, 0, 200); // creating a linear gradient vertically
    gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
    gradient.addColorStop(0.5, "rgba(255, 255, 255, 0)");
    gradient.addColorStop(0.5, "rgba(0, 0, 0, 0)");
    gradient.addColorStop(1, "rgba(0, 0, 0, 1)");

    // fill the gradient
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 300, 200);

    // rendering a color picker circle
    const pickerCircle = function(x, y){
      ctx.beginPath();
      ctx.arc(x, y, 7, 0, Math.PI * 2);
      ctx.strokeStyle = 'black';
      ctx.stroke();
      ctx.closePath();

      circleRender++;

      localStorage.setItem('currentX', x);
      localStorage.setItem('currentY', y);


    }

    if(circleRender === 0){
      pickerCircle(10, 10, 7, 0, Math.PI * 2);
    } else {
      const currentX = localStorage.getItem('currentX');
      const currentY = localStorage.getItem('currentY');
      pickerCircle(currentX, currentY, 7, 0, Math.PI * 2);
    }


    // event listeners
    let isMouseDown = false;

    const onMouseDown = (e) => {
      let currentX = e.clientX - canvas.offsetLeft; // gives you coordinates only within the <canvas>
      let currentY = e.clientY - canvas.offsetTop;

      if( currentY > 10 && currentY < 10 + 7 && currentX > 10 && currentX < 10 + 7){
        // if true mouse is in the picker circle
        isMouseDown = true; // we can drag it over on the canvas
      } else {
        // ctx.beginPath();
        // ctx.arc(currentX, currentY, 7, 0, Math.PI * 2);
        // ctx.strokeStyle = 'black';
        // ctx.stroke();
        // ctx.closePath();
        pickerCircle(currentX, currentY, 7, 0, Math.PI * 2);
      }
    }

    // const onMouseMove = (e) => {
    //   if(isMouseDown) {
    //     // can drag and change color picker position
    //     let currentX = e.clientX - canvas.offsetLeft;
    //     let currentY = e.clientY - canvas.offsetTop;
    //     // ctx.beginPath();
    //     // ctx.arc(currentX, currentY, 7, 0, Math.PI * 2);
    //     // ctx.strokeStyle = 'black';
    //     // ctx.stroke();
    //     // ctx.closePath();
    //
    //     pickerCircle(currentX, currentY, 7, 0, Math.PI * 2)
    //   }
    // }

    const onMouseUp = () => {
        isMouseDown = false;
    }

    canvas.addEventListener('mousedown', onMouseDown)
    // canvas.addEventListener('mousemove', onMouseMove)

    document.addEventListener("mouseup", onMouseUp);


    canvas.addEventListener("mousemove", function() {
      let imageData = ctx.getImageData(localStorage.getItem('currentX'), localStorage.getItem('currentY'), 1, 1);
      selected.style.backgroundColor = `rgb(${imageData.data[0]}, ${imageData.data[1]}, ${imageData.data[2]})`
      $('.rgb').text(`(${imageData.data[0]}, ${imageData.data[1]}, ${imageData.data[2]})`);
      $('.hex').text(hexConverter(imageData.data[0], imageData.data[1], imageData.data[2]))
    });

  }

  setInterval(() => draw(), 1);



});
