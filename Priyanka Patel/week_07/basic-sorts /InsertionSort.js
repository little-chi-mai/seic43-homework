  // Loop through each element

  // store the current item value so it can be placed correctly
  // in the sorted portion of the array

  // Loop backward through the sorted portion of the array
  // and scoot everything over until you find the right place to
  // insert the value you're working with

  // Copy each item to the next slot over, as long as the value is smaller
  // than the item in the sorted array we're looking at (items[j] > value)

  // We can now insert the item in its sorted location

  // Remember to return the list!

  function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        // select the first element in our unsorted subarray
        let current = array[i];
        // The last element of our sorted subarray
        let k = i-1;
          while ((k > -1) && (current < array[k])) {
            array[k+1] = array[k];
            k--;
          }
          array[k+1] = current;
    };
    console.log(array);
    return array;
 };
insertionSort([20, 30, 11, 7, 2,5,1,6,4])
module.exports = insertionSort;
