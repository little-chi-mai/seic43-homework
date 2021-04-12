console.log('Lalala');

const sum = function (arr1, arr2) {
    let result = 0;

    arr1.forEach(num => {
        result += num;
    })

    arr2.forEach(num => {
        result += num;
    })

    return result;
}

console.log(sum([2, 6.4, 3], [3, 3.6, 2]));

const sumMultiple = function () {
    let result = 0;

    for (let i = 0; i < arguments.length; i++) {
        const arr = arguments[i];
        
        for (let j = 0; j < arr.length; j++) {
            result += arr[j];
        }
    }

    return result;
}

console.log(sumMultiple([2, 6.4, 3], [3, 3.6, 2], [2, 6.4, 3], [3, 3.6, 2], [2, 6.4, 3], [3, 3.6, 2]));