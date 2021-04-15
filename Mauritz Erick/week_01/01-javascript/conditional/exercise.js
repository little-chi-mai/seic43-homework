//What number's bigger

const greaterNum = function(a,b){

    if(a > b){
        console.log(`The greater number of ${a} and ${b} is ${a}`);
    }
    else{
        console.log(`The greater number of ${a} and ${b} is ${b}`);
    }
}
greaterNum(50,10);
greaterNum(10,900);

//The World Translator

const helloWorld = function(lang){
    if (lang == 'es') {
        return 'Hola, Mundo';
    } else if (lang == 'de') {
        return 'Hallo, Welt';
    } else if (lang == 'en') {
        return 'Hello, World';
    } 
    else {
        return 'err';
    }
}

console.log(helloWorld('es'));
console.log(helloWorld('de'));
console.log(helloWorld('en'));
console.log(helloWorld('e'));

//The Grade Assigner

const assignGrade = function(score){
    if (score < 55){
        return 'F';
    } else if (score >= 55 && score <= 65){
        return 'D';
    } else if (score > 65 &&  score <= 75){
        return 'C';
    } else if (score > 75 && score <= 85){
        return 'B';
    }
      else {
        return 'A';
      }
}

console.log(assignGrade(54));
console.log(assignGrade(55));
console.log(assignGrade(66));
console.log(assignGrade(76));
console.log(assignGrade(85));
console.log(assignGrade(88));

//The Pluralizer

const pluralize = function(noun,num){
    if (num != 0 && num != 1 && noun != 'sheep' && noun != 'geese') {
        return num + ' ' + noun + 's';
    } else {
        return num+ ' ' + noun;
    }
}

console.log(pluralize('cat', 0));
console.log(pluralize('cat', 1));
console.log(pluralize('cat', 2));

//Exercises: for loops
//Even or odd reporter
console.log("\n\nEven/Odd Reporter");
for (let i = 0; i <= 20; i++){
    
    if(i === 0){
        console.log('it is 0');
    }
    else if(i % 2 === 0){
        console.log(i + ' is even');
    }
    else {
        console.log(i + ' is odd');
    }
}


//Multiplication Tables
console.log("\n\nMultiplication Tables");
for (let i = 0; i <= 10; i++){
    j = i * 9
    console.log(`${i} * 9 is ${j}`);
}

//Bonus: Use a nested for loop to show the tables for every multiplier form 1 to 10
console.log("\n\nBonus Part");

for (let a = 0; a <= 10; a ++){
    for(let b = 1; b <= 10; b++){
        console.log(a*b);
    }
}


//The Grade Assigner
console.log("\n\nThe Grade Assigner");
for(let grade = 60; grade <= 100; grade++){
    console.log('For ' + grade + ', you got a ' + assignGrade(grade));
}


//Array Exercise - Top Choices

let array = ['blue', 'green', 'yellow', 'orange', 'purple'];
for(let i = 0; i < array.length; i++){
    let j = i+1
    console.log(`\nMy #${j} choice is ${array[i]}`);

    if(j == 1){
        console.log("My 1st choice is " + array[i]);
    } else if(j == 2){
        console.log("My 2nd choice is " + array[i]);
    } else if(j == 3){
        console.log("My 3rd choice is " + array[i]);
    } else if (j > 3){
        console.log("My " + j + "th choice is " + array[i]);
    }
}





