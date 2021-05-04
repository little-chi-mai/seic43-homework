// $(document).ready(function () {
//   $.ajax("https://www.googleapis.com/books/v1/volumes?q=title:" + bookTitle).done(function (info) {
//     image = $('#cover').attr('src', info.items[0].volumeInfo.imageLinks.thumbnail)
//     console.log("https://www.googleapis.com/books/v1/volumes?q=title:" + bookTitle);
//   });
// });

// function findMax(arr,index = 0, max = 0 ){
//     // This function returns the largest number in a given array.
//
//   if(arr.length > index){
//     if (arr[index] > max){
//       max = arr[index];
//
//     }
//     nextIndex = index + 1;
//     findMax(arr,nextIndex,max);
//     return;
//   }
//
//
//   console.log(max);
//   return;
// }
function getFlips(n) {
    // Helper recursive function
    function addFlips(n, result, current) {
        if (n === 1) {
            // This is the last flip, so add the result to the array
            console.log(current);
            result.push(current + 'H');
            result.push(current + 'T');
        } else {
            // Let's say current is TTH (next combos are TTHH and TTHT)
            // Then for each of the 2 combos call add Flips again to get the next flips.
            console.log(current);
            addFlips(n - 1, result, current + 'H');
            addFlips(n - 1, result, current + 'T');
        }
    }
    // Begin with empty results
    let result = [];
    // Current starts with empty string
    addFlips(n, result, '');
    return result;
}

console.log(getFlips(3));
