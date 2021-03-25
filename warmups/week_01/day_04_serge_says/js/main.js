// ## Warmup - Serge Says

// Create a function that takes an input and returns Serge's response as following:

// * Serge answers 'Sure.' if you ask him a question.

// * He answers 'Woah, chill out!' if you yell at him (ALL CAPS).

// * He says 'Fine. Be that way!' if you address him without actually saying anything.

// * He answers 'Whatever.' to anything else.

// console.log('Thank God it stops raining');

const sergeSays = function (message) {
    // * Serge answers 'Sure.' if you ask him a question.
    if (message.endsWith('?')) {
        return 'Sure.'

    // * He says 'Fine. Be that way!' if you address him without actually saying anything.
    } else if (message.length === 0) {
        return 'Fine. Be that way!';
    
    // * He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
    } else if (message === message.toUpperCase()) {
        return 'Woah, chill out man!';

    } else {
        return 'Whatever.'
    }
}

console.log(sergeSays('Hello?'));
console.log(sergeSays('HELLO'));
console.log(sergeSays(''));
console.log(sergeSays('Hellooooo'));
