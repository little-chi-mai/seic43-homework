function bubbleSort(array) {

  let needToIterate = true;  //assume the worst

  let end = array.length - 1;

  while(needToIterate === true){
    needToIterate = false; //we haven't had to move anything yet

    for(let i = 0; i < end; i++){

      if(array[i] > array[i+1]){
    [ array[i], array[i+1] ] = [ array[i+1], array[i] ]
        needToIterate = true;
      }
    }
    end--;
  }
    return array;
}

module.exports = bubbleSort;
