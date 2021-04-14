/*Create a function that takes an input and returns Serge's response as following:

Serge answers 'Sure.' if you ask him a question.

He answers 'Woah, chill out!' if you yell at him (ALL CAPS).

He says 'Fine. Be that way!' if you address him without actually saying anything.

He answers 'Whatever.' to anything else.
*/


const serge = function(input)
{   
    let output = 0;
    if(input.endsWith('?')){
        output = "Sure";
    }
    else if(input === ""){
        output = "Fine. Be that way";
    }
    else if(input === input.toUpperCase()){
        output = "Woah, chill out!";
    }
    else {
        output = "Whatever";

    }
    
    return output;
}
console.log(serge("hi?"));
console.log(serge("ASDASSA"));
console.log(serge(""));
console.log(serge("asd"));


