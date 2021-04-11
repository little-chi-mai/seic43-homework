console.log('There are two ways to write error-free programs; only the third one works.');

// # toCamelCase

// Write a function called toCamelCase that accepts a single string as an argument:
// - The toCamelCase function should return the string as camel-cased, removing each `_` or `-` characters and capitalizing the character following the `_` or `-`.
// - If the string argument does not contain a `_` or a `-`, return the same string.

// ## Bonus:
// - This is a great challenge for using regular expressions combined with the `String.replace` method. (If not, nevermind for now!)
// ```Javascript
// Examples:
// toCamelCase( 'sei' ) // => 'sei'
// toCamelCase( 'sei-rocks' ) // => 'seiRocks'
// toCamelCase( 'banana_Turkey_potato' ) // => 'bananaTurkeyPotato'
// toCamelCase( 'Mama-mia' ) // => 'MamaMia'
// toCamelCase( 'A_b_c' ) // => 'ABC'
// ```

const toCamelCase = function (string) {
    let result = string.split('');
    console.log(result);

    for (let i = 0; i < result.length; i++) {
        const char = result[i];

        if (char === '-' || char === '_') {
            result.splice(i, 1); // remove 1 elment at index i
            result[i] = result[i].toUpperCase(); 
        }
    }

    return result.join('');
}

// FOR NERDS - DONT WORRY ABOUT THIS!!!
// const toCamelCase = function (string) {
//     return string.replace(/[_-]\w/g, function(match) {
//         return match[1].toUpperCase();
//     })
// };

console.log(toCamelCase( 'sei' ));
console.log(toCamelCase( 'sei-rocks' ));
console.log(toCamelCase( 'banana_Turkey_potato' ));
console.log(toCamelCase( 'Mama-mia' ));
console.log(toCamelCase( 'A_b_c' ));


