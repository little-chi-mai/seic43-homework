function bubbleSort(array) {
    const len = array.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (array[j] > array[j+1]) {        
                var temp = array[j+1];       
                array[j+1] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}

module.exports = bubbleSort;